const addBtn = document.getElementById('addBtn');
const addBook = document.getElementById('addBook');

const inputTitle = document.getElementById('book-title');
const inputAuthor = document.getElementById('book-author');
const inputPage = document.getElementById('book-page-number');

const closeBtn = document.getElementById('closeBtn');
const deleteItem = document.getElementById('delete-item');

const form = document.querySelector('modal');
const bookCollection = document.querySelector('.collection-books');

const modalContainer = document.querySelector('.modal-container');
const container = document.querySelector('.container');

//console.log(bookCollection);

//console.log(inputTitle.value);

const openModal = () => {
  modalContainer.classList.add('open');
  container.classList.add('open');
};

const closeModal = () => {
  modalContainer.classList.remove('open');
  container.classList.remove('open');
};

const newBook = () => {
  if (
    inputTitle.value === '' ||
    inputAuthor.value === '' ||
    inputPage.value === ''
  ) {
    alert('Please fill out everything!');
  }

  const booklist = `
    <ul class="book-list">
    <li>${inputTitle.value}</li>
    <li>${inputAuthor.value}</li>
    <li>${inputPage.value}</li>
    <li class="switch">
        <input type="checkbox" />
    </li>
    <li class="delete"><i class="fas fa-trash"></i></li>
    </ul>
  `;
  bookCollection.insertAdjacentHTML('beforeend', booklist);
};

// Document loaded
document.addEventListener('DOMContentLoaded', () => {
  //   Open modal
  addBtn.addEventListener('click', openModal);
  //   Close modal
  closeBtn.addEventListener('click', closeModal);
  //   Add Book
  addBook.addEventListener('click', newBook);
});
