/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  /**
   * images config
   * @see:https://nextjs.org/docs/messages/next-image-unconfigured-host
   * @see: https://nextjs.org/docs/api-reference/next/image#dangerously-allow-svg
   */
  images: {
    loader: "imgix",
    path: "https://ik.imagekit.io/",
    domains: ["ik.imagekit.io"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig
