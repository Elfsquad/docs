const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Elfsquad Docs',
  tagline: 'Elfsquad Docs',
  url: 'https://docs.elfsquad.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Elfsquad', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Elfsquad Docs',
      logo: {
        alt: 'Elfsquad',
        src: 'img/logo_black.png',
        srcDark: 'img/logo_white.png'
      },
      items: [
        {
          to: '/docs/Introduction/',
          label: 'Documentation',
          position: 'left'
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/elfsquad',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/Introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/elfsquad',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/WeAreElfsquad',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/elfsquad',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
           
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://elfsquad.io">Elfsquad</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/elfsquad/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/elfsquad/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }
    ],
    [
      'redocusaurus',
       {
        specs: [
          {
            route: '/apis/data',
            spec: "https://api.elfsquad.io/data/1/swagger/v2/swagger3.json",
          },
          {
            route: '/apis/configurator',
            spec: 'https://api.elfsquad.io/configurator/v1/swagger.json'
          },
          {
            route: '/apis/scim',
            spec: './specs/scim.yaml'
          },
          {
            route: '/apis/quotation',
            spec: 'http://localhost:5105/swagger/v1/swagger.json'
          }
        ],
        theme: {
          primaryColor: '#1b1b1d'
        }
      }
    ]
  ],
};
