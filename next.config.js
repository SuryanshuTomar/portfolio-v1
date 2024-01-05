/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.giphy.com",
			},
			{
				protocol: "https",
				hostname: "giphy.com",
			},
		],
	},
};

module.exports = nextConfig;
