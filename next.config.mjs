/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,

    // Optimización de imágenes para hosting estático
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: '*.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'www.gruposimx.com',
            },
        ],
    },
};

export default nextConfig;
