/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        domains: ["localhost"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'docs.github.com'
            },
            {
                protocol: 'https',
                hostname: 'www.pizzafjoset.no'
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com'
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com'
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            }
        ],
    }
}

module.exports = nextConfig