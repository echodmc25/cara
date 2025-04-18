/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clients.echodigital.net",
      },
    ],
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: "/cara2", // 🏷 Important for subdirectory hosting
//   trailingSlash: true, // 🏷 Ensures static files work properly
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "clients.echodigital.net",
//       },
//     ],
//   },
// };

// export default nextConfig;
