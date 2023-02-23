/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['https://ahtback-u095.onrender.com'], //make it 'your-domain.com'
//   },
// };

// // next.config.js
module.exports = {

  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
    ],
},
}