/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // This allows all domains - adjust based on your needs
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
