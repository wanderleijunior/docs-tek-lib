const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tek-Lib',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  base: '/docs-tek-lib/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#2d68c3' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guia',
        link: '/guia/',
      },
      {
        text: 'Componentes',
        link: '/components/',
      },
      {
        text: 'Serviços',
        link: '/services/',
      },
      {
        text: 'Changelog',
        link: '/changelog/'
      },
      {
        text: 'Dev',
        link: '/'
      }
    ],
    sidebar: {
      '/guia/': [
        {
          title: 'Guia',
          collapsable: false,
          children: [
            '',
            'instalation',
            'configuration',
            'existing-products'
          ]
        }
      ],
      '/components/': [
        {
          title: 'Componentes',
          collapsable: false,
          children: [
            '',
            'login'
          ]
        }
      ],
      '/services/': [
        {
          title: 'Serviços',
          collapsable: false,
          children: [
            '',
            'tekLibAuth',
          ]
        }
      ],
      '/changelog/': [
        {
          title: 'Changelog',
          collapsable: false,
          children: [
            '',
            'tek-lib'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
