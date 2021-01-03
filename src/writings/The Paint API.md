---
slug: "/writing/programming/frontend/javascript/The Paint API"
date: "2021-02-01"
---

# The Paint API
references: https://www.sitepen.com/blog/programmatically-create-images-with-the-css-paint-api/

### Notes
* The CSS Paint API is a modern web platform feature to programmatically create images in JS which are rendered to the page when referenced by CSS. You create images using the Canvas API. 
* You can use the paint image anywhere you would expect a CSS image.
* Instead of downloading some image somewhere from the internet, CSS extracts the image from JS itself.
* You define the image in JS (called a paint worklet). However it has some constraints: no network access, no storage access, no script lifetime guarantee, no timer functions like setInterval. 
* They are independent of the main JS thread and work a lot like Web Workers.
* This paint class you define in the worklet gets passed a canvas object, paint size, and input props.	
	* It can be passed custom properties from the CSS selector.
	* this is great bc it means you can essentially create an image that can be reused and restyled via css properties throughout your application.
* Animate images by repainting them by changing the custom attributes somewhere. 
