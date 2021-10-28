import { loginServiceRedirectUrl, loginServiceUrl } from './environment'
import { logger } from './logger'


export const hentLoginUrl = () => {
    return `${loginServiceUrl()}?redirect=${loginServiceRedirectUrl()}`
}

/**
 * Class with utility functions for working with fetch.
 * Redirects to Login Service if any request contains a 401 response.
 */
class Fetch {
    static loginServiceUrl = hentLoginUrl();

    /**
     * Make a GET request for the specified resource
     * Redirects to Login Service if request contains a 401 response.
     * @param {string} url - The endpoint to call
     * @param {(data: unknown) => Promise<T>} cb - The function to call after res.json()
     * @param {HeadersInit} headers - Headers
     * @return {Promise<T>} The data
     */
    static async authenticatedGet<T>(url: string, cb: (data: unknown) => Promise<T>, headers?: HeadersInit): Promise<T> {
        const res = await fetch(url, {
            credentials: 'include',
            headers: headers
        })
        if (res.ok) {
            try {
                return await cb(await res.json())
            } catch (error) {
                if (error instanceof TypeError) {
                    logger.warn('oops', error)
                } else {
                    logger.error('Unnamed error occured', error )
                }
                throw new Error(
                    'Beklager! En uventet feil har oppstått. Sannsynligvis jobber vi med saken allerede, men ta kontakt med oss hvis det ikke har løst seg til i morgen.',
                )
            }
        }
        if (res.status === 401) {
            window.location.href = this.loginServiceUrl
            throw new Error('Sesjonen er utløpt. Vi videresender deg til innloggingssiden.')
        }
        const textResponse = await res.text()
        logger.error(`Request to ${url} resulted in statuscode: ${res.status} with message: ${textResponse}`)
        if (res.status === 400) {
            throw new Error(textResponse)
        }
        throw new Error('Vi har problemer med baksystemene for øyeblikket. Vennligst prøv igjen senere.')
    }

    /**
     * Make a POST request to the specified endpoint
     * Redirects to Login Service if request contains a 401 response.
     * @param {string} url - The endpoint to call
     * @param {T | undefined} body - The body to send with the request
     * @return {string} The response from the http request parsed as text
     */
    static async authenticatedPost<T>(url: string, body?: T): Promise<string> {
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const textResponse = await res.text()
        if (res.ok) {
            return textResponse
        }
        if (res.status === 401) {
            window.location.href = this.loginServiceUrl
            throw new Error('Sesjonen er utløpt. Vi videresender deg til innloggingssiden.')
        }
        logger.warn(`Request to ${url} resulted in statuscode: ${res.status} with message: ${textResponse}`)
        if (res.status === 400) {
            throw new Error(textResponse)
        }
        throw new Error('Vi har problemer med baksystemene for øyeblikket. Vennligst prøv igjen senere.')
    }
}

export default Fetch
