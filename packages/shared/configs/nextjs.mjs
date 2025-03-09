import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

// dotenv.config({ path: '../../.env' });

/**
 * TAPIE 대시보드 웹 프로젝트를 위한 Next.js 설정을 반환합니다.
 * @param {string} type
 * @returns
 */
export function withTAPIEDashboardConfig(type) {
  const withVanillaExtract = createVanillaExtractPlugin({ identifiers: 'short' });

  /** @type {import('next').NextConfig} */
  const nextConfig = {
    webpack(config) {
      const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

      config.module.rules.push({
        ...fileLoaderRule,
        test:          /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test:          /\.svg$/i,
        issuer:        fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use:           ['@svgr/webpack'],
      });

      fileLoaderRule.exclude = /\.svg$/i;

      return config;
    },

    typescript: { ignoreBuildErrors: true },

    env: {
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://tapie-api-dev.vport.dev',
      AUTH_SERVICE:        'website',
      AUTH_URL:            process.env.AUTH_URL || 'http://localhost:9876',
      API_HOSTNAME:        type === 'admin' ? process.env.API_HOSTNAME || (process.env.NODE_ENV === 'production' ? 'https://api.tapie.kr' : 'http://localhost:6678') : process.env.API_HOSTNAME || (process.env.NODE_ENV === 'production' ? 'https://api.tapie.kr' : 'http://localhost:7000'),
      API_VERSION:         process.env.API_VERSION || 'api/v1',
    },

    transpilePackages: ['@tapie-kr/api-client'],

    rewrites() {
      if (process.env.NODE_ENV === 'production') {
        return [];
      }

      return [
        {
          source: '/api/:path*', destination: `${this.env.NEXT_PUBLIC_API_URL}/:path*`,
        },
      ];
    },
  };

  return withVanillaExtract(nextConfig);
}
