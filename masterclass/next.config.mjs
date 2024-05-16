/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'media.licdn.com',
      port: '',
      pathname: '/**',
    }],
    domains: ["deepskill.space"],
  }
};

export default nextConfig;
