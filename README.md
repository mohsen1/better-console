# better-console
## A better console for Node.js

better-console is a drop-in replacement for node default console which
gives you colors and more methods in console.

## How to use it

```
console = require('better-console');

console.log("This is a log information");
console.warn("Warning!");
console.info("Information");
console.table([ [1,2], [3,4] ]);
console.time("Timer");
console.timeEnd("Timer");
console.dir(myObject);

```

## TODOs

 * Use Unicode icons to mimic browser console icons in OSX
 * `console.table` 
