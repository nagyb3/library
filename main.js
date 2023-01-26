let myLibrary = [];

function Book(name, author, pages, alreadyRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    if (alreadyRead === 'on') {
        this.alreadyRead = true;
    } else if (alreadyRead === null) {
        this.alreadyRead = false;
    }

}
const area = document.querySelector('.books');

let para;
let para2;
let para3;
let statusCheckbox;
let alreadyReadPara = document.createElement('p');
alreadyReadPara.textContent = 'Already read it?';
alreadyReadPara.style.display = 'inline';
let deleteButton;

function addBookToLibrary(name, author, pages, alreadyRead) {
    myLibrary.push(new Book(name, author, pages, alreadyRead));
    let newElement;
    area.textContent = null;
    for (let i = 0; i < myLibrary.length; i++) {
        newElement = document.createElement('div');
        newElement.classList.add('card');
        para = document.createElement('p');
        para.textContent = `Title: ${myLibrary[i].name}`;
        newElement.append(para);
        
        deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            myLibrary.pop(i);
            let elementToDelete = document.querySelector(`.books > :nth-child(${i + 1})`);
            // console.log(elementToDelete);
            elementToDelete.remove();
        })
        newElement.append(deleteButton);



        para2 = document.createElement('p');
        para2.textContent = `Author: ${myLibrary[i].author}`;
        newElement.append(para2);

        para3 = document.createElement('p');
        para3.textContent = `Number of pages: ${myLibrary[i].pages}`;
        newElement.append(para3);

        statusCheckbox = document.createElement('input');
        statusCheckbox.setAttribute('type', 'checkbox')
        if (myLibrary[i].alreadyRead === true) {
            statusCheckbox.setAttribute('checked', '');
        }
        statusCheckbox.classList.add('card-checkbox');
        statusCheckbox.addEventListener('click', () => {
            myLibrary[i].toogleStatus();
        })
        newElement.append(alreadyReadPara);
        newElement.append(statusCheckbox);

        area.append(newElement);
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get('name');
    const author = data.get('author');
    const pages = data.get('pages');
    const alreadyRead = data.get('alreadyRead');

    addBookToLibrary(name, author, pages, alreadyRead);
    form.setAttribute('hidden', "");
    form.reset();
}

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

const newBookButton = document.querySelector('.new-book-button');


newBookButton.addEventListener('click', () => {
    form.removeAttribute('hidden');
})


Book.prototype.toogleStatus = function()  {
    this.alreadyRead ? this.alreadyRead = false : this.alreadyRead = true;
}
