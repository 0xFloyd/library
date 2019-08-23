let myLibrary = [];
let rowId = 1;
let libraryArray = document.getElementById('libraryHolder');
let mainFormContainer = document.getElementById('formContainer');
mainFormContainer.appendChild(libraryArray);
let formVisibilityButton = document.getElementById('showForm');
let submitForm = document.getElementById('formSubmit');
let formContents = document.getElementById('bookForm');
formVisibilityButton.addEventListener('click', toggleForm);
submitForm.addEventListener('submit', getBookInfo);
formContents.addEventListener('submit', getBookInfo);
let libraryTable = document.getElementById('libraryTable');


function Book(bookTitle, bookAuthor, bookPages, bookStatus) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookPages = bookPages;
    this.bookStatus = bookStatus;
}

function toggleForm() {
    let x = mainFormContainer;
    if (x.style.display === "none") {
        x.style.display = "block";
    } 

    else {
        x.style.display = "none";
    }
    return;
}

function getBookInfo(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let status = document.getElementById('status').value;
    let book = new Book(title, author, pages, status);
    addBookToLibrary(book);
    //console.log(book.bookTitle, book.bookAuthor, book.bookPages, book.bookStatus);
    //libraryArray.innerHTML = "Title-" + '"' + book.bookTitle + '"' + " Author-" + '"' + book.bookAuthor + '"' + " Number of Pages-" + '"' + book.bookPages + '"' + " Book read-" + book.bookStatus;
    let newRow = libraryTable.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    cell1.innerHTML = rowId;
    cell2.innerHTML = book.bookTitle;
    cell3.innerHTML = book.bookAuthor;
    cell4.innerHTML = book.bookPages;
    cell5.innerHTML = book.bookStatus;
    cell6.innerHTML = "delete";
    rowId += 1;
}


function addBookToLibrary(bookInput) {
   myLibrary.push(bookInput);
   //console.log(myLibrary);
   return myLibrary;

}

