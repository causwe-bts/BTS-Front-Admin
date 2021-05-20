module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost/api/:path*', // Proxy to Backend
      },
    ];
  },
};
