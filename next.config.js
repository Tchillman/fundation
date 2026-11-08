/** @type {import('next').NextConfig} */
const figmaPublicUrl = process.env.FIGMA_PUBLIC_URL;
let figmaDevHostname;

if (process.env.FIGMA && figmaPublicUrl) {
  try {
    figmaDevHostname = new URL(figmaPublicUrl).hostname;
  } catch {
    // Ignore malformed host metadata rather than weakening origin checks.
  }
}

const nextConfig = {
  ...(figmaDevHostname
    ? {
        allowedDevOrigins: [figmaDevHostname],
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;