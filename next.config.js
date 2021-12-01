/* eslint-disable @typescript-eslint/no-var-requires */
const withLess = require('next-with-less')

module.exports = withLess({
    basePath: '/syk/sykepenger',
    lessLoaderOptions: {},
    serverRuntimeConfig: {
        // Will only be available on the server side
        decoratorEnv: process.env.DECORATOR_ENV,
        decoratorUrl: process.env.DECORATOR_URL,
        noDecorator: process.env.NO_DECORATOR,
        utviklingArkivering: process.env.UTVIKLING_ARKIVERING,
        arkivering: process.env.ARKIVERING,
        spinnsynBackendUrl: process.env.SPINNSYN_BACKEND_URL,
        azureAppClientId: process.env.AZURE_APP_CLIENT_ID,
        azureAppClientSecret: process.env.AZURE_APP_CLIENT_SECRET,
        azureOpenidConfigTokenEndpoint: process.env.AZURE_OPENID_CONFIG_TOKEN_ENDPOINT,
        azureAppWellKnownUrl: process.env.AZURE_APP_WELL_KNOWN_URL,
        azureAppPreAuthorizedApps: process.env.AZURE_APP_PRE_AUTHORIZED_APPS,
        spinnsynBackendClientId: process.env.SPINNSYN_BACKEND_CLIENT_ID,
        idportenClientId: process.env.IDPORTEN_CLIENT_ID,
        idportenWellKnownUrl: process.env.IDPORTEN_WELL_KNOWN_URL,
        naisAppImage: process.env.NAIS_APP_IMAGE,
        loginserviceUrl: process.env.LOGINSERVICE_URL,
        loginServiceRedirectUrl: process.env.LOGINSERVICE_REDIRECT_URL,
        loginserviceIdportenDiscoveryUrl: process.env.LOGINSERVICE_IDPORTEN_DISCOVERY_URL,
        loginserviceIdportenAudience: process.env.LOGINSERVICE_IDPORTEN_AUDIENCE,
        tokenXWellKnownUrl: process.env.TOKEN_X_WELL_KNOWN_URL,
        tokenXPrivateJwk: process.env.TOKEN_X_PRIVATE_JWK,
        tokenXClientId: process.env.TOKEN_X_CLIENT_ID,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        flexGatewayRoot: process.env.FLEX_GATEWAY_ROOT,
        mockBackend: process.env.MOCK_BACKEND,
        opplaering: process.env.OPPLAERING,
        sykefravaerUrl: process.env.SYKEFRAVAER_URL,
        dittNavUrl: process.env.DITTNAV_URL,
        amplitudeKey: process.env.AMPLITUDE_KEY,
        amplitudeEnabled: process.env.AMPLITUDE_ENABLED,
        environment: process.env.ENVIRONMENT,
    },
})
