---
slug: "/writing/programming/frontend/html/HTML"
date: "2021-02-01"
---

# HTML Basics
*general purpose document for all things html*

### Resources
* https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
* https://svgontheweb.com/
--------------------------------------------------------------------------------

## Notes
### SVGs
* Two types of images on the web: Raster and vector
	* Raster: defined using a grid of pixels (location + color of each pixel). This is png, gif, bitmap, jpeg, etc.
	* Vector: defined using an algorithm. This is SVG.
* Benefits in SVG: Text remains accessible since it is still rendered.
* Inlining SVGs removes one additional http request and therefore can save a tiny bit of loading time.
	* However, this removes browser caching of the image. 

### Best Practices
* **Don't** include trailing slashes for empty elements, they are unnecessary and can actually slow things down.
	* `<input type="text">` is better than `<input type="text" />`
* Use double quotes, not single quotes in HTML.
* Preferable to not write out the full boolean attribute values
	* `required` is better than `required="true"`
* Always specify alt, width, and height for items

