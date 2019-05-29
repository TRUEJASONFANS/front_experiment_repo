module.exports = {
  title: '前端知识图谱',
  description: 'front knowledge collecting repo.',
  themeConfig: {
    repo: 'TRUEJASONFANS/front_doc_repo',
    lastUpdated: 'Last Updated',
    editLinks: true,
    editLinkText: '在 github 上编辑此页',
    docsDir: 'docs',
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: '知识图谱', link: '/knowledgemap/' },
    ],
    sidebar: {
      '/guide/': []
    },
  },
};