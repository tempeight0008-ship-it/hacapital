/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
