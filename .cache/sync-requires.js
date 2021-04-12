const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-markdown-jsx": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/website/website_v6/src/components/Markdown.jsx"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/website/website_v6/src/pages/404.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/website/website_v6/src/pages/index.js")))
}

