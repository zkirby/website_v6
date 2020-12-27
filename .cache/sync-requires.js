const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ARK/Desktop/web-dev/projects/website/website_v6/.cache/dev-404-page.js"))),
  "component---src-components-utils-markdown-jsx": hot(preferDefault(require("/Users/ARK/Desktop/web-dev/projects/website/website_v6/src/components/utils/Markdown.jsx"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/ARK/Desktop/web-dev/projects/website/website_v6/src/pages/404.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ARK/Desktop/web-dev/projects/website/website_v6/src/pages/index.js")))
}

