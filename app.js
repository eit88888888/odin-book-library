const myLibrary = [];

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

addBookToLibrary("The Diary of Samuel Pepys", "Samuel Pepys", "233");




    const postContainer = document.querySelector('.grid');

    const postMethods = () => {
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
                <button class="card-btn" id="change-status">Not Read</button>
                <button class="card-btn" id="remove-card">Remove</button>
            </div>
            `
            postContainer.appendChild(postElement);
        })
    }
    postMethods();

