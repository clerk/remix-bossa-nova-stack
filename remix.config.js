/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  serverBuildTarget: 'vercel',
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['**/*.test.{js,jsx,ts,tsx}'],
  serverModuleFormat: "cjs",
  future: {
    v2_errorBoundary: false,
  },
}
