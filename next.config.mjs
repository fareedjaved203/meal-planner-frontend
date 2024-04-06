/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "https://kitchen-compass.com/admin/api/2024-01/orders.json",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
