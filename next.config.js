/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Pro VPS bez Vercelu — statický export (volitelné)
  // output: 'export',
}

module.exports = nextConfig
