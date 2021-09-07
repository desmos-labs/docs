module.exports = {
  title: 'Desmos documentation',
  tagline: 'Desmos network official documentation for developers and validators',
  url: 'https://test-docs.desmos.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'assets/favicon.ico',
  organizationName: 'desmos-labs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    /*algolia: {
      apiKey: 'a0c8cc3eb829f6595a2cd41870f92a81',
      indexName: 'desmos',
      contextualSearch: true,
      appId: 'BH4D9OD16A',

    },*/
    navbar: {
      logo: {
        alt: 'Desmos logo',
        src: 'assets/logo.svg',
        srcDark: 'assets/logo.svg',
        href: 'https://docs.desmos.network'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro', // open page of section
          position: 'left',
          label: 'Documentation',
        },
        // {to: '/blog', label: 'Blog', position: 'left'}, to add extra sections
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        /*{
          // Re-add this if we want to use localization
          type: 'localeDropdown',
          position: 'right',
        },*/
      ],
    },
    hideableSidebar: true,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Related docs',
          items: [
            {
              label: 'Cosmos SDK',
              href: 'https://docs.cosmos.network',
            },
            {
              label: 'CosmWasm',
              href: 'https://docs.cosmwasm.com/en/docs/1.0/'
            }
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
        src: 'assets/logo.png',
        href: 'https://www.desmos.network',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Desmos Network`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          editUrl: 'https://github.com/desmos-labs/docs/master',
          showLastUpdateTime: true,
          versions: {
            current: {
              label: "Testnet 🛠"
            },
            mainnet: {
              label: "Mainnet 🚀"
            }
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  /*i18n: { // add for localization
    defaultLocale: 'en',
    locales: ['en', 'chinese'],
  },*/
};
