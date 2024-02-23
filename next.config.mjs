/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains : ['donworry.s3.ap-northeast-2.amazonaws.com']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/test',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
