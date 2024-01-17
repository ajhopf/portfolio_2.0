/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/fluency/100/nextjs.png'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/color/100/tailwind_css.png'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/officel/100/express-js.png'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/color/100/java-coffee-cup-logo--v1.png'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/color/100/firebase.png'
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname:
          '/external-tal-revivo-color-tal-revivo/100/external-nodejs-is-an-open-source-cross-platform-javascript-run-time-environment-logo-color-tal-revivo.png'
      }
    ]
  }
};

module.exports = nextConfig;
