// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: '', // 포트가 필요하지 않다면 생략
        pathname: '/coins/images/**', // 이미지 경로 설정 (와일드카드)
      },
    ],
  },
};
