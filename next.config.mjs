/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "launchweek.ai" }],
        destination: "https://www.launchweek.ai/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
