// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


import { themes as prismThemes } from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Asher\'s Blog',
    tagline: 'Your favorite site to get the latest from Asher',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://asherwinstead.dev/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'MrAshCreates', // Usually your GitHub org/user name.
    projectName: 'blog', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',

                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: {

                    showReadingTime: true,
                    editUrl: 'https://github.com/MrAshCreates/blog/tree/main/'
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        // Replace with your project's social card
        image: 'img/banner-2560x1440.jpg',
        navbar: {
            title: 'Asher\'s Blog',
            logo: {
                alt: 'Asher\'s Logo',
                src: 'https://github.com/mrashcreates.png',
            },
            items: [
                { to: '/blog', label: 'Blog', position: 'left' },

                {
                    href: 'https://github.com/MrAshCreates/blog-site',
                    label: 'GitHub',
                    position: 'right',
                },

                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Guides',
                },


            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [
                        
                        {
                            label: 'Guides',
                            to: '/docs/category/linux-guides',
                        },
                        {
                            label: 'Sort Guides by tags',
                            to: '/docs/tags',
                        },

                    ],

                },

                {

                    title: 'Social',
                    items: [{
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/in/asher-winstead-a89a8325b',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/SW3tAHvfBD',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/MrAshCreates',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Sort Blogs by tags',
                            to: 'blog/tags/',
                        },
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'Asher\'s Main Site',
                            href: 'https://mrashcreates.xyz',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/MrAshCreates/blog-site',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} MrAshCreates`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    }),
};

export default config;
