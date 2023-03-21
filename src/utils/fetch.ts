import { v4 as uuidv4 } from 'uuid'

import { feilmeldingerUrl } from './environment'

export type FetchResult = { requestId: string; response: Response }

export type ErrorHandler = (result: Response, requestId: string, defaultErrorHandler: () => void) => void

export class FetchError extends Error {}

export class AuthenticationError extends Error {}

export const fetchMedRequestId = async (
    url: string,
    options: RequestInit = {},
    errorHandler?: ErrorHandler,
): Promise<FetchResult> => {
    const requestId = uuidv4()

    options.headers = options.headers
        ? { ...options.headers, 'x-request-id': requestId }
        : { 'x-request-id': requestId }

    const fetchUrl = async () => {
        try {
            return await fetch(url, options)
        } catch (e) {
            throw new FetchError(
                `${e} - Kall til url: ${
                    options.method || 'GET'
                } ${url} og x_request_id: ${requestId} feilet uten svar fra backend.`,
            )
        }
    }

    const response = await fetchUrl()

    if (response.status == 401) {
        window.location.reload()
        throw new AuthenticationError('Reloader siden på grunn av HTTP-kode 401 fra backend.')
    }

    if (!response.ok) {
        const defaultErrorHandler = () => {
            throw new FetchError(
                `Kall til url: ${options.method} ${url} og x_request_id: ${requestId} feilet med HTTP-kode: ${response.status}.`,
            )
        }
        if (errorHandler) {
            errorHandler(response, requestId, defaultErrorHandler)
        } else {
            defaultErrorHandler()
        }
    }

    return { requestId, response }
}

export const fetchJsonMedRequestId = async (url: string, options: RequestInit = {}, errorHandler?: ErrorHandler) => {
    const fetchResult = await fetchMedRequestId(url, options, errorHandler)
    const response = fetchResult.response

    type Payload = { requestId: string; app: string; payload: string }

    function lagrePayload(payload: Payload) {
        try {
            fetch(`${feilmeldingerUrl()}/api/v1/feilmelding`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })
        } catch (e) {}
    }

    // Kloner siden kall til .json() konsumerer data, og vi trenger å gjøre et kall til .text() hvis det ikke er mulig
    // å parse JSON.
    const clonedResponse = response.clone()
    try {
        return await response.json()
    } catch (e) {
        lagrePayload({
            requestId: fetchResult.requestId,
            app: 'spinnsyn-frontend',
            payload: await clonedResponse.text(),
        })
        throw new FetchError(
            `${e} - Kall til url: ${options.method || 'GET'} ${url} og x_request_id: ${
                fetchResult.requestId
            } feilet ved parsing av JSON med HTTP-kode: ${response.status}.`,
        )
    }
}
