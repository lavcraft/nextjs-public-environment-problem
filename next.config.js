const shared = {
    isProduction: process.env.NODE_ENV === 'production',
}

const plainConfiguration = {
    reactStrictMode: true,

    serverRuntimeConfig: {
        ...shared,
    },

    publicRuntimeConfig: {
        ...shared,
        backendEndpoint: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT ?? 'http://localhost:8080',
    },
    poweredByHeader: false,
};

console.log(`next.config.js = ${JSON.stringify(plainConfiguration, null, 2)}`);
module.exports = plainConfiguration;