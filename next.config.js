/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "tailwindui.com",
      "flowbite.com",
      "img.freepik.com",
      "images.unsplash.com",
    ],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
