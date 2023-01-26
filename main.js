let myLibrary = [];

function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}
const area = document.querySelector('.books');

let para; let para2; let para3;

function addBookToLibrary(name, author, pages) {
    myLibrary.push(new Book(name, author, pages));
    let newElement;
    area.textContent = null;
    // for (let i = 0; i < myLibrary.length; i++) {
    //     newElement = document.createElement('div');
    //     authorP = document.createElement('p');
    //     authorP.textContent = `Author: ${myLibrary[i].author}`;
    //     // titleP.textContent = `Title: ${myLibrary[i].title}`;
    //     // pagesP.textContent = `Pages: ${myLibrary[i].pages}`;
    //     // newElement.innerText = `${myLibrary[i].name} ${myLibrary[i].author} ${myLibrary[i].pages}\n`
    //     newElement.appendChild(titleP);
    //     newElement.appendChild(authorP);
    //     // newElement.appendChild(pagesP);
    //     area.appendChild(newElement);
    // }
    for (let i = 0; i < myLibrary.length; i++) {
        newElement = document.createElement('div');
        newElement.classList.add('card');
        para = document.createElement('p');
        para.textContent = `Title: ${myLibrary[i].name}`;
        newElement.append(para);

        para2 = document.createElement('p');
        para2.textContent = `Author: ${myLibrary[i].author}`;
        newElement.append(para2);

        para3 = document.createElement('p');
        para3.textContent = `Number of pages: ${myLibrary[i].pages}`;
        newElement.append(para3);

        area.append(newElement);
    }
}
//
// addBookToLibrary('firstName', 'firstAuthor', 1);
// addBookToLibrary('secondName', 'secondAuthor', 2);

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get('name');
    const author = data.get('author');
    const pages = data.get('pages');

    addBookToLibrary(name, author, pages);
    form.setAttribute('hidden', "");
    form.reset();
}

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

const newBookButton = document.querySelector('.new-book-button');


newBookButton.addEventListener('click', () => {
    form.removeAttribute('hidden');
})