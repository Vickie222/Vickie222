// Book Class
class Book {
    #isbn; 
  
   constructor (title, author, isbn, available = true) {
      this.title = title;
      this.author = author;
      this.#isbn = isbn;
      this.available = available;
    }
  
    
    getIsbn = () => {
      return this.#isbn;
    }
  
    setIsbn =(value) => {
      console.log("ISBN cannot be modified directly.");
    }
  
    
    borrowBook = () => {
      if (this.available) {
        this.available = false;
        console.log(`You have borrowed "${this.title}".`);
      } else {
        console.log(`Sorry, "${this.title}" is currently not available.`);
      }
    }
  
   
    returnBook =() => {
      this.available = true;
      console.log(`You have returned "${this.title}".`);
    }
  }
  
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    
    addBook =(book) => {
      this.books.push(book);
      console.log(`"${book.title}" has been added to the library.`);
    }
  
    
    removeBook =(isbn) => {
      this.books = this.books.filter(book => book.getIsbn() !== isbn);
      console.log(`Book with ISBN ${isbn} has been removed from the library.`);
    }
  

    findBookByTitle =(title) => {
      const book = this.books.find(book => book.title === title);
      if (book) {
        console.log(`Found book: Title: ${book.title}, Author: ${book.author}, ISBN: ${book.getIsbn()}, Available: ${book.available}`);
        return book;
      } else {
        console.log(`Book with title "${title}" not found.`);
      }
    }
  }
  
  
  class DigitalLibrary extends Library {
    constructor() {
      super();
    }
  
    
    downloadBook = (isbn)  =>{
      const book = this.books.find(book => book.getIsbn() === isbn);
      if (book && book.available) {
        console.log(`You have downloaded "${book.title}".`);
      } else if (book && !book.available) {
        console.log(`"${book.title}" is currently unavailable for download.`);
      } else {
        console.log(`Book with ISBN ${isbn} not found.`);
      }
    }
  }
  
  
  const book1 = new Book("Things Fall Apart", "Chinua Achebe", "9780385474542");
  const book2 = new Book("Ugly Love", "Hoover Collen", "9781476753188");
  const library = new DigitalLibrary();
  
  library.addBook(book1);
  library.addBook(book2);
  
  library.findBookByTitle("Ugly Love");
    book1.borrowBook();
    book1.borrowBook();
    library.findBookByTitle("Things Fall Apart");
  
  library.downloadBook("9781476753188");
  book1.returnBook();
  library.downloadBook("9781476753188");
  
  library.removeBook("9780385474542");