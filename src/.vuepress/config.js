module.exports = {
  title: "前端知识图谱",
  description: "front knowledge collecting repo.",
  port:"80",
  base:"/front/",
  dest:"docs/front",
  themeConfig: {
    repo: "TRUEJASONFANS/front_doc_repo",
    lastUpdated: "Last Updated",
    editLinks: true,
    editLinkText: "在 github 上编辑此页",
    docsDir: "src",
    nav: [
      { text: "指南", link: "/guide/" },
      { text: "API", link: "/api/" },
      { text: "知识图谱", link: "/knowledgemap/" }
    ],
    sidebar: {
      "/guide/": [
        {
          title: "指南",
          collapsable: false,
          children: [
            "",
            "packageManager",
            "packager/",
            "compiler",
            {
              title: "create react app",
              path: "react/create_react_app.md"
            },
            "packager/others",
            "unit_test",
            "canvas_doc/",
            "css_doc/",
            "umi/",
            "react/",
            {
              title: "react进阶",
              path: "react/react2"
            },
            {
              title: "react query",
              path: "react/react_query"
            },
            {
              title: "create react app",
              path: "react/create_react_app.md"
            }, 
            {
              title: "Generl",
              path: "general/https.md"
            }
          ]
        }
      ],
    }
  }
};
