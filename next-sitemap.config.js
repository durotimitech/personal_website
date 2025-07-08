module.exports = {
    siteUrl: 'https://yourwebsite.com', // TODO: Replace with your real domain
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
        additionalSitemaps: [
            'https://yourwebsite.com/sitemap.xml',
        ],
    },
}; 