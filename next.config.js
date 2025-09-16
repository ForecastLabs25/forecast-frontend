/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'https://api.databutton.com/_projects/1c864ee9-6357-44a4-a3ab-3093ef5742cd/dbtn/prodx/app/routes/:path*',
      },
    ];
  },
};
module.exports = nextConfig;
