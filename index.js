document.addEventListener('DOMContentLoaded', displayBooks);
          
function displayBooks() {
  const books = getBooks();

  books.forEach((book) => addBookToList(book));
}

function addBookToList(book) {
  const list = document.querySelector('#collection');

  const bookDisplay = document.createElement('div');
  bookDisplay.className = 'Collection1';
  bookDisplay.innerHTML = `
    <p class="bookTitle">${book.title}</p>
    <p>${book.author}.</p>
    <button class="delete">Remove</button>
  `;

  list.appendChild(bookDisplay);
}

