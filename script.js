let myLibrary = [];
let bookId = 1;
let libraryArray = document.getElementById('libraryHolder');
let mainFormContainer = document.getElementById('formContainer');
mainFormContainer.appendChild(libraryArray);
let formVisibilityButton = document.getElementById('showForm');
let submitForm = document.getElementById('formSubmit');
let formContents = document.getElementById('bookForm');
formVisibilityButton.addEventListener('click', toggleForm);
submitForm.addEventListener('submit', getBookInfo);
formContents.addEventListener('submit', getBookInfo);
let libraryContainer = document.getElementById('libraryHolder');


function Book(bookTitle, bookAuthor, bookPages, bookStatus) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookStatus = bookStatus;
}

function toggleForm() {
    let x = mainFormContainer;
    if (x.style.display === "block") {
        x.style.display = "none";
    } 

    else {
        x.style.display = "block";
    }
    return;
}

function getBookInfo(e) {
    e.preventDefault();
    let bookIndex = bookId;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;
    let book = new Book(title, author, pages, status);
    addBookToLibrary(book);
    //console.log(book.bookTitle, book.bookAuthor, book.bookPages, book.bookStatus);
    //libraryArray.innerHTML = "Title-" + '"' + book.bookTitle + '"' + " Author-" + '"' + book.bookAuthor + '"' + " Number of Pages-" + '"' + book.bookPages + '"' + " Book read-" + book.bookStatus;
    let newCard = document.createElement('div');
    newCard.className = "card w-100";

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.innerText = "Book " + bookIndex + ": " + '"' + title + '"';

    let cardAuthor = document.createElement('p');
    cardAuthor.className = 'card-text';
    cardAuthor.innerText = "Author: " + author;

    let cardPages = document.createElement('p');
    cardPages.className = 'card-text';
    cardPages.innerText = "Pages: " + pages;

    let cardStatus = document.createElement('p');
    cardStatus.className = 'card-text';
    cardStatus.innerText = "Read?: " + status;

    let cardDelete = document.createElement('a');
    cardDelete.className = 'closeButton';
    cardDelete.innerText = 'Delete';
    cardDelete.setAttribute("href", "#");

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardAuthor);
    cardBody.appendChild(cardPages);
    cardBody.appendChild(cardStatus);
    cardBody.appendChild(cardDelete);
    newCard.appendChild(cardBody);
    libraryContainer.appendChild(newCard);

    bookId += 1;
    formContents.reset();
}

/*
    <div class="card w-100">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
 */ 

function addBookToLibrary(bookInput) {
   myLibrary.push(bookInput);
   //console.log(myLibrary);
   return myLibrary;

}

