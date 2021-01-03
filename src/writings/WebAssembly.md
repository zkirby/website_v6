---
slug: "/writing/programming/frontend/javascript/WebAssembly"
date: "2021-02-01"
---

# WebAssembly

### Resources
* https://mbebenita.github.io/WasmExplorer/
* https://developer.mozilla.org/en-US/docs/WebAssembly
-------------------------------------------------------------------------------

### Notes
* A way to run other programming languages (besides JavaScript) in the browser.
* Much faster than just executing JS in the browser. 
* Can in theory pre-compile things like modules, etc and then just use those pre-compiled modules which would be much much faster. 
	* Someone could author a npm package in Rust, and JS devs could use it. 
* C -> IR -> WebAssembly -> x86/ARM. Key is that the hop from web assembly to the real assembly is very short and very very fast.
* It's faster since wasm is already in byte code, it just needs to be translated (instead of parsed in to an AST) which is much much faster. 
* Will probably replace modules. Allow code re-use between web and native platforms. 
* This only works for compiled languages (C, Rust, ect).

