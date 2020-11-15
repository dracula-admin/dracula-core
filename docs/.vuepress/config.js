module.exports = {
  title: 'dracula-core',
  description: '[description]',
  head: [
    ['link', { rel: 'icon', href: '/vampire.png' }],
  ],
  themeConfig: {
    logo: '/vampire.png',
    editLinks: true,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config Reference', link: '/config/' },
      { text: 'Changelog', link: 'https://github.com/dracula-admin/dracula-core/blob/main/CHANGELOG.md' },
      { text: 'GitHub', link: 'https://github.com/dracula-admin/dracula-core' }
    ],
    sidebar: [
      '/guide/',
      '/installation/',
      '/usage/',
      {
        title: 'Components',
        collapsable: false,
        children: [
          {
            title: 'Base components',
            children: [
              '/components/hello'
            ]
          },
          {
            title: 'Form components',
            children: [
              '/components/hello'
            ]
          }
        ]
      },
      '/config/'
    ]
  },
}