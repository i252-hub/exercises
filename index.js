

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

