let myLibrary = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}
const area = document.querySelector('.books');



function addBookToLibrary(name, author, pages) {
    myLibrary.push(new Book(name, author, pages));
    let newElement;
    area.textContent = null;
    for (let i = 0; i < myLibrary.length; i++) {
        newElement = document.createElement('p');
        newElement.innerText = `${myLibrary[i].name} ${myLibrary[i].author} ${myLibrary[i].pages}\n`
        area.appendChild(newElement);
    }
}

addBookToLibrary('firstName', 'firstAuthor', 1);
addBookToLibrary('secondName', 'secondAuthor', 2);

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get('name');
    const author = data.get('author');
    const pages = data.get('pages');

    addBookToLibrary(name, author, pages);
}

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);