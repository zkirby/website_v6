const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-markdown-jsx": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/website/zkirby.github.io/src/components/Markdown.jsx"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/website/zkirby.github.io/src/pages/404.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kirby/Desktop/web-dev/website/zkirby.github.io/src/pages/index.js")))
}

