const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Desmos documentation',
  tagline: 'Desmos documentation',
  url: 'https://docs.desmos.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Desmos-labs', // Usually your GitHub org/user name.
  projectName: 'desmosdocs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Desmos',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        //href: 'https://docs.desmos.network' activate this when the new docs is online
      },
      items: [
        {
          type: 'doc',
          docId: 'intro', // qui pagina di apertura sezione docs
          position: 'left',
          label: 'Docs',
          // docsPluginId: 'docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          //docsPluginId: 'docs',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        /*{
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/DesmosNetwork',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/yxPRGdq',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/desmosnetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              to: 'https://www.desmos.network',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/desmos-labs/desmos',
            },
          ],
        },
      ],
      logo: {
        alt: 'Desmos Logo',
        src: 'img/logo.png',
        href: 'https://www.desmos.network',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Desmos Network`,
    },

  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es' , 'it', 'chinese'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/desmos-labs/docs/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
