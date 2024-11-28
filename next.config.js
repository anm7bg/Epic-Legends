/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "data.powweb.space",
          },
          {
            protocol: "https",
            hostname: "powweb.space",
          },
          {
            protocol: "https",
            hostname: "i0.wp.com",
          },
        ],
      },
}

module.exports = nextConfig
