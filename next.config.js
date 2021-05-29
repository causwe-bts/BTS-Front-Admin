module.exports = {
  basePath: '/admin',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://caupizza.shop/api/:path*', // Proxy to Backend
      },
    ];
  },
};
