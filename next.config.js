/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        domains: ["localhost", "cdn-yams.godt.no"], // Add the hostname here
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
                hostname: 'sol.no'
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org'
            }
        ],
    }
}

module.exports = nextConfig;
