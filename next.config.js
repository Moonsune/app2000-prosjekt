/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'docs.github.com'
            },
            {
                protocol: 'https',
                hostname: 'www.pizzafjoset.no'
            }
        ],
    }
}

module.exports = nextConfig
