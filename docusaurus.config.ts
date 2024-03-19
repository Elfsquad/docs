import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
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
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'elfsquad',
      items: [        
        {
          to: '/docs/apis',
          label: 'API',
          position: 'left'
        },
        {
          to: '/docs/customization',
          label: 'Customization',
          position: 'left'
        },
        {
          to: '/docs/guides',
          label: 'Guides',
          position: 'left'
        },
        {
          to: '/docs/archer',
          label: 'Archer',
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
              label: 'Guides',
              to: '/docs/guides',
            },
            {
              label: 'Customization',
              to: '/docs/customization',
            },
            {
              label: 'APIs',
              to: '/docs/apis',
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    algolia: {
      appId: 'JOXJX624HB',
      apiKey: 'dd0c7c7caceac6e1a85a1fc13142ec34',
      indexName: 'elfsquad',
    }
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/elfsquad/docs/edit/main/',
            docRootComponent: "@theme/DocRoot",
            docItemComponent: "@theme/ApiItem" // derived from docusaurus-theme-openapi-docs
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
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'api',
        docsPluginId: 'classic',
        config: {
          data: {
            specPath: 'http://localhost:5104/data/1/swagger/v2/swagger.json',
            outputDir: 'docs/spec/data',
            sidebarOptions: {
              groupPathsBy: 'tag'
            }
          },
          configurator: {
            specPath: 'http://api.elfsquad.io/configurator/v1/swagger.json',
            outputDir: 'docs/spec/configurator',
            sidebarOptions: {
              groupPathsBy: 'tag'
            }
          },
          scim: {
            specPath: './specs/scim.yaml',
            outputDir: 'docs/spec/scim',
            sidebarOptions: {
              groupPathsBy: 'tag'
            }
          },
          quotation: {
            specPath: 'https://api.elfsquad.io/quotation/1/swagger/v1/swagger.json',
            outputDir: 'docs/spec/quotation',
            sidebarOptions: {
              groupPathsBy: 'tag'
            }
          }
        }
      }
    ]
  ],
  themes: [
    'docusaurus-theme-openapi-docs'
  ]
};


export default config;
