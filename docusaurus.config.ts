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
          label: 'Integration',
          position: 'left'
        },
        {
          to: '/docs/configurator',
          label: 'Configurator',
          position: 'left'
        },
        {
          to: '/docs/spec/quotation/elfsquad-web-quotationapi',
          label: 'Quotations',
          position: 'left'
        },
        {
          to: '/docs/customization',
          label: 'Customization',
          position: 'left'
        },
        {
          to: '/docs/archer',
          label: 'Archer',
          position: 'left'
        },
        {
          to: '/docs/spec/scim/scim-api',
          label: 'Identity',
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'json', 'powershell', 'http', 'bash', 'ruby', 'php', 'java'],

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
            specPath: 'http://api.elfsquad.io/data/1/swagger/v2/swagger.json',
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
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themes: [
    'docusaurus-theme-openapi-docs'
  ]
};


export default config;
