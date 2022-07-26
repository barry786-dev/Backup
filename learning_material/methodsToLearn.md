# parsInt()
# parsFloat()
# isNaN()
# eval()
# isFinite()
# isInteger()
# isSafeInteger()
# BigInt ()
# repeat ()
let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
# s.substring(1,4)
// => "ell": the 2nd, 3rd, and 4th characters.
# s.slice(1,4)
// => "ell": same thing
# s.slice(-3)
// => "rld": last 3 characters
# s.split(", ")
// => ["Hello", "world"]: split at delimiter string
let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
# pattern.test(text)
# text.search(pattern)
# text.match(pattern)
# text.replace(pattern, "#")
# text.split(/\D+/)
# let s = Symbol("sym_x");
s.toString()
// => "Symbol(sym_x)"
# let s = Symbol.for("shared");
let t = Symbol.for("shared");
s === t
// => true
s.toString()
// => "Symbol(shared)"
# Symbol.keyFor(t) // => "shared"