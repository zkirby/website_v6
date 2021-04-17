
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kirby/Desktop/web-dev/website/website_v6/.cache/dev-404-page.js")),
  "component---src-components-markdown-markdown-jsx": preferDefault(require("/Users/kirby/Desktop/web-dev/website/website_v6/src/components/Markdown/Markdown.jsx")),
  "component---src-pages-404-jsx": preferDefault(require("/Users/kirby/Desktop/web-dev/website/website_v6/src/pages/404.jsx")),
  "component---src-pages-index-js": preferDefault(require("/Users/kirby/Desktop/web-dev/website/website_v6/src/pages/index.js"))
}

