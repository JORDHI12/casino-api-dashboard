/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Statik export modu
  distDir: 'build',  // Build dizini
  
  // Statik export için gelişmiş ayarlar
  trailingSlash: true,
  
  // Görüntü optimizasyonu
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  },

  // Performans ve uyumluluk ayarları
  reactStrictMode: true,
  swcMinify: true,


};

export default nextConfig;
