// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-components-markdown-jsx": () => import("./../../../src/components/Markdown.jsx" /* webpackChunkName: "component---src-components-markdown-jsx" */),
  "component---src-pages-404-jsx": () => import("./../../../src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

