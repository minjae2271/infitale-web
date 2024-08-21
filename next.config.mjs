/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'oaidalleapiprodscus.blob.core.windows.net',
            port: '',
        }]
    }
};

export default nextConfig;
