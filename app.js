const myLibrary = [];

const postContainer = document.querySelector('.grid');

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-book-button");
const closeButton = document.querySelector("#add-book-esc-button");

const addBookButton = document.querySelector("#dialog-add-book");
const removeBookButton = document.querySelector("#remove-card");
const changeStatusBookButton = document.querySelector("#change-status");


const name = document.querySelector("#name");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

function Book(id, name, author, pages) {
  this.id = id;
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
}


function addBookToLibrary(name, author, pages) {
  let id = crypto.randomUUID();
  myLibrary.push(new Book(id, name, author, pages));
}

const postMethods = () => {
        postContainer.innerHTML = "";
        myLibrary.map((postData) => {
              const postElement = document.createElement('div');
            postElement.classList.add('card');
            postElement.innerHTML = `
            <h2 class="card-header">${postData.name}</h2>
            <div class="card-info">
                <p class="autor">by ${postData.author}</p>
                <p class="pages">${postData.pages} pages</p>
            </div>
            <div class="card-buttons">
                <button class="card-btn change-status">Not Read</button>
                <button class="card-btn remove-card">Remove</button>
            </div>
            `
            postContainer.appendChild(postElement);  
            
        })
    }
postMethods();

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

addBookButton.addEventListener("click", e => {
    e.preventDefault();

    if (name.value.length < 3 || name.value.length > 20) {
        name.setCustomValidity("Enter between 3 and 20 characters");
        name.reportValidity();
        return;
    } 
    else if (author.value.length < 3 || author.value.length > 20) {
        author.setCustomValidity("Enter between 3 and 20 characters");
        author.reportValidity();
        return;
    }  
    else if (pages.value < 1 || pages.value > 5000) {
        pages.setCustomValidity("Enter between 1 and 5000 pages");
        pages.reportValidity();
        return;
    }
    
    addBookToLibrary(name.value, author.value, pages.value);
    postMethods();
    dialog.close();
});

postContainer.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;

  const index = Array.from(postContainer.children).indexOf(card);

  if (e.target.classList.contains("remove-card")) {
    myLibrary.splice(index, 1);
    card.remove();   
  }

  if (e.target.classList.contains("change-status")) {
    myLibrary[index].isRead = !myLibrary[index].isRead;
    e.target.textContent = myLibrary[index].isRead ? "Read" : "Not Read";
  }
});