const shelf = document.querySelector(".book-table");
const container = document.querySelector(".container");

let myLibrary = [
  {
    title: "The Hobbit",
    pages: 284,
    author: "JRR Tolkien",
    status: "Not read",
  },
  {
    title: "Thursday Murder Club",
    pages: 377,
    author: "Richard Osman",
    status: "In Progress",
  },
  {
    title: "American Gods",
    pages: 451,
    author: "Neil Gaiman",
    status: "Read",
  },
];

function Book(title, pages, author, status) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.status = status;
}

function addBookToLibrary() {
  const newBook = new Book();
}

for (const book of myLibrary) {
  const bookEntry = document.createElement("tr");
  for (let i = 0; i < book; i++) {
    const bookTableEntry = document.createElement("td");
    bookTableEntry.textContent = value;
    bookEntry.appendChild(bookTableEntry);
    console.log(`${value}`);
  }
  shelf.appendChild(bookEntry);
  console.log(bookEntry);
}
