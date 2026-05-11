import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  outputFileTracingRoot: __dirname,
  reactStrictMode: true,
  redirects: async () => {
    return [
      // If this app is ever mounted under /habitooo, keep legacy paths working.
      { source: "/habitooo", destination: "/", permanent: true },
      { source: "/habitooo/privacy", destination: "/privacy", permanent: true },
      { source: "/habitooo/terms", destination: "/terms", permanent: true },
      { source: "/habitooo/support", destination: "/support", permanent: true }
    ];
  }
};

export default nextConfig;

