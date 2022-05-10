// 1 Changing "prototype"

function Rabbit0() {}
Rabbit0.prototype = {
  eats: true,
};

let rabbit0 = new Rabbit0();

console.log(rabbit0.eats); // true

// We added one more string (emphasized). What will console.log show now?
function Rabbit1() {}
Rabbit1.prototype = {
  eats: true,
};

let rabbit1 = new Rabbit1();

Rabbit1.prototype = {};

console.log(rabbit1.eats); // ? true

// …And if the code is like this (replaced one line)?

function Rabbit2() {}
Rabbit2.prototype = {
  eats: true,
};

let rabbit2 = new Rabbit2();

Rabbit2.prototype.eats = false;

console.log(rabbit2.eats); // ? false

// And like this (replaced one line)?

function Rabbit3() {}
Rabbit3.prototype = {
  eats: true,
};

let rabbit3 = new Rabbit3();

delete rabbit3.eats;

console.log(rabbit3.eats); // ? true

// The last variant:

function Rabbit4() {}
Rabbit4.prototype = {
  eats: true,
};

let rabbit4 = new Rabbit4();

delete Rabbit4.prototype.eats;

console.log(rabbit4.eats); // ? undefined

// 2 Create an object with the same constructor

let obj2 = new obj.constructor();