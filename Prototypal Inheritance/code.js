// Which values are shown in the process?

let animal = {
    jumps: null,
  };
  
  let rabbit = {
    __proto__: animal,
    jumps: true,
  };
  
  console.log(rabbit.jumps); // ? (1) => true, found in the  rabbit
  
  // delete rabbit.jumps;
  
  console.log(rabbit.jumps); // ? (2) // null, not found in the rabbit
  
  // delete animal.jumps;
  
  // console.log(rabbit.jumps); // ? (3) // undefined, not in the rabbit nor in its parent, animal
  
  // 2- Searching algorithm
  
  let head = {
    glasses: 1,
  };
  
  let table = {
    pen: 3,
  };
  table.__proto__ = head;
  
  let bed = {
    sheet: 1,
    pillow: 2,
  };
  
  bed.__proto__ = table;
  
  let pockets = {
    money: 2000,
  };
  
  pockets.__proto__ = bed;
  
  console.log(pockets.pen); // 3 because of prototypical chaining
  console.log(bed.glasses); // 1
  

  
  // 3- Where does it write?

  let animal2 = {
    eat() {
      this.full = true;
    },
  };
  
  let rabbit2 = {
    __proto__: animal2,
  };
  
  rabbit2.eat(); 
  console.log(rabbit2.full); // true
  console.log(animal2.full); // undefined
  
  // 4- Why are both hamsters full?
  let hamster = {
  //   stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    },
  };
  
  let speedy = {
      stomach: [],
    __proto__: hamster,
  };
  
  let lazy = {
      stomach: [],
    __proto__: hamster,
  };
  

  speedy.eat("apple");
  console.log(speedy.stomach); // apple
  
  console.log(lazy.stomach); // apple => []