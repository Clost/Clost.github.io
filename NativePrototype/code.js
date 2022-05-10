// Add method "f.defer(ms)" to functions
// Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.

Function.prototype.defer = function (ms) {
  setTimeout(this, ms);
};

function f() {
  console.log("Hello!");
  return "Hello!";
}

f.defer(1000); // shows "Hello!" after 1 second

Function.prototype.defer = function (ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
};

function f2(a, b) {
  console.log(a + b);
  return a + b;
}

f2.defer(1000)(1, 2); // shows 3 after 1 second