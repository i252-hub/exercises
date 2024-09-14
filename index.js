function Book (title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
      return  `${this.title + ' ' + this.author + ', ' + this.pages + ', ' + this.read}`;
    }
}

const hobbit = new Book('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not ready');

console.log(hobbit.info());


function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'

Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true

Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 
 player1.sayHello(); // logs "Hello, I'm a player!"
 player2.sayHello(); // logs "Hello, I'm a player!"
 