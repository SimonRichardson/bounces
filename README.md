# Trampoline

Reifies continutations onto the heap, rather than the stack. Allows
efficient tail calls.

Example usage:

```javascript
function loop(n) {
   function inner(i) {
       if(i == n) return done(n);
       return cont(function() {
           return inner(i + 1);
       });
   }

   return trampoline(inner(0));
}
```

Where `loop` is the identity function for positive numbers. Without
trampolining, this function would take `n` stack frames.
