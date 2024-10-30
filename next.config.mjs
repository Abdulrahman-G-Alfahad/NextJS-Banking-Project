/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "humanrightsrilanka.org",
      },
      {
        protocol: "https",
        hostname: "react-bank-project.eapi.joincoded.com",
      },
    ],
  },
};

export default nextConfig;
