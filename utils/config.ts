import getConfig from 'next/config'

export interface PublicConfiguration {
    backendEndpoint: string;
}

export function getPublicConfiguration(): PublicConfiguration {
    const {publicRuntimeConfig} = getConfig() ?? {
        publicRuntimeConfig: {}
    }
    return publicRuntimeConfig as PublicConfiguration;
}