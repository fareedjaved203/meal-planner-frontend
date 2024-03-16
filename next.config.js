const withImages = require("next-images");

const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "png.pngtree.com" }],
  },
};

module.exports = withImages(nextConfig);
