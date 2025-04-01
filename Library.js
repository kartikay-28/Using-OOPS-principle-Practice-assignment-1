// Step 1: Create the Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true; // Default value is true
    }
    
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available.`);
        }
    }
    
    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

// Step 2: Create the User Class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
    
    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed ${book.title}.`);
        } else {
            console.log(`${book.title} is already borrowed.`);
        }
    }
    
    return(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            book.returnBook();
            this.borrowedBooks.splice(index, 1);
            console.log(`${this.name} returned ${book.title}.`);
        } else {
            console.log(`${this.name} does not have ${book.title}.`);
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456789");
const book2 = new Book("1984", "George Orwell", "987654321");

const user1 = new User("Alice", 1);
const user2 = new User("Bob", 2);

// Borrow and return books
user1.borrow(book1);
user2.borrow(book1); 
user1.return(book1); 
user2.borrow(book1); 
