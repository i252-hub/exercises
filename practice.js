/*function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`);
  };
  
  function Player(name, marker) {
    this.name = name;
    this.marker = marker;
  }
  
  // Don't do this!
  // Use 
  Object.setPrototypeOf(Player.prototype, Person.prototype)
  
  function Enemy(name) {
    this.name = name;
    this.marker = '^';
  }
  
  // Not again!
  // Use 
  Object.setPrototypeOf(Enemy.prototype, Person.prototype)
  
  Enemy.prototype.sayName = function() {
    console.log('HAHAHAHAHAHA');
  };
  
  const carl = new Player('carl', 'X');
  const sarah = new Enemy(' ');
  carl.sayName();
  sarah.sayName(); // Uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!
  */

  /*
  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3
  };

  Object.setPrototypeOf(table, head);
  
  let bed = {
    sheet: 1,
    pillow: 2
  };

  Object.setPrototypeOf(bed, table);

  
  let pockets = {
    money: 2000
  };

  Object.setPrototypeOf(pockets, bed);

console.log(pockets.pen, bed.glasses)
*/

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach: []
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple