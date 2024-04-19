/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { 
        domains: [process.env.HOME_PATH],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**'
            }
        ],
    }
}

module.exports = nextConfig