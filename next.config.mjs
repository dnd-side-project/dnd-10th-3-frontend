/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // mock image로 테스트 하기 위한 config입니다. 
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
