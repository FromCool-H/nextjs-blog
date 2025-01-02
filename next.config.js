/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const path = require('path');

// 设置内容安全策略
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  child-src 'none';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  media-src 'none';
  object-src 'none';
  img-src * data:;
`

const nextConfig = {
  i18n: {
    locales: ["zh"],
    defaultLocale: "zh",
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'www.manfreddemoblog.top']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'node_modules')],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
