function addBookToList(book) {
  const list = document.querySelector('#collection');

  const bookDisplay = document.createElement('div');
  bookDisplay.className = 'Collection1';
  bookDisplay.innerHTML = `
    <p class="bookTitle">${book.title}</p>
    <p>${book.author}.</p>
    <button class="delete">Remove</button>
    <hr>
  `;

  list.appendChild(bookDisplay);
}

function getBooks() {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

const books = getBooks();

function displayBooks() {
  books.forEach((book) => addBookToList(book));
}

document.addEventListener('DOMContentLoaded', displayBooks);

function addBook(book) {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(title) {
  const books = getBooks();

  books.forEach((book, index) => {
    if (book.title === title) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books));
}

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
}

document.querySelector('#book-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = {
    title,
    author,
  };

  addBookToList(book);
  addBook(book);
  clearFields();
});

document.querySelector('#collection').addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    event.target.parentElement.remove();
    const bookTitle = event.target.previousElementSibling.previousElementSibling.textContent;
    removeBook(bookTitle);
  }
});