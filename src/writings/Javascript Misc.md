---
slug: "/writing/programming/frontend/javascript/Javascript Misc"
date: "2021-02-01"
---

# JavaScript Misc
* general js notes, can be about anything*

### Resources
* https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
* https://css-tricks.com/css-animations-vs-web-animations-api/
---------------------------------------------------------------------------------

### Web Animations API
* One of the most performant ways to write animations.
* Breaks up animating into two parts: the timing object, and the actual transformations to go through. 
* Easy access by 'animate': `document.getElementById("alice").animate(transforms, timing);
* Can also get all animations with document.getAnimations()
* Also provide events that can be handled and listened for. 

### Canvas API 
* Provides a means for drawing graphics in JS and HTML. Largely focuses on 2D graphics. 
* WebGL mainly used for 3D graphics.

### The 'New' Function
* You can create a function with the 'new Function' method by passing in a list of args and the function body.
  * ex: let add = new Function('a', 'b', 'return a + b');
  * sum (1 ,2) => 3

### Generators
* Use special syntax: `function*`. Ex:
  ```function* gen() { 
      yield 1;
      yelid 2;
    }```
* Returns a special object called a generator object when called, doesn't return a value.
* Call `next()` on the returned object to yield the next value.
* Generators are iterable so you can spread them into a list to get all possible return values.
* Can embed one generator in another so something like `yield* otherGenerator()` would return all the values from other generator before proceeding.
* Can pass a value back to the generator by passing a value into the 'next' call. This value will be what is returned by the corresponding yield.
* Can also make values asynchronously iterable. You can await the next value from the generator. 
* Common practice for `Symbol.iterator` to return a generator.

### Modules
* CommonJS is the m odule system for node.js
* Modules always use 'use strict' by default.
* Imports must have a path, no bare module imports allowed. EX) import x from 'Hi', not allowed but import x from './Hi' is fine.
* Can also use dynamic imports with the await keyword + import(modulePath) which returns a promise.
