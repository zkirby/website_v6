---
slug: "/writing/programming/frontend/javascript/JS Compiler"
date: "2021-02-01"
---

# JS Compiler
* https://javascript.info/garbage-collection

----------------------------------------------------------------------

### Misc
* All objects are true by default.
* Can alter the primitive representation of an object depending on the hint (string, number, default) more here: https://javascript.info/object-toprimitive

### Garbage Collection
* Main concept of memeory management in Js is reachability. How reachable are values that are usable or accessible somehow. 
  * These values are guaranteed to be stored in memory - called roots
  * Base set of values:
  1. Local variables and parameters of the current function.
  2. Same for any other function on the call stack.
  3. Global vars
* Any other value is considered to be reachable if it can be reached from a root by a reference or by a chain of references. 
* Basic garbage collection algorithm is called "mark and sweep". Which is just a giant BFS traversal where all objects not visited get removed.


