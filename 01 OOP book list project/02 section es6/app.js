class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI{
    handleSubmit(e){
        e.preventDefault();

        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const isbn = document.getElementById('isbn');
    
        if(this.validForm(title.value,author.value,isbn.value)){
            const book = new Book(title.value,author.value,isbn.value);
        
            this.addBookToList(book);
            //   persist
            Store.addBook(book);

            this.clearFields();
            UI.showAlert('Add book success!','success');
        }
    }

    validForm(title,author,isbn){
        if(title === '' || author === '' || isbn === ''){
            UI.showAlert('Please fill the fields!','error');
            return false;
        }else{
            return true;
        }
    }

    addBookToList(book){
        const bookList = document.getElementById('book-list');

        // create row
        const row = document.createElement('tr');
    
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="delete">X</a></td>
        `
    
        bookList.appendChild(row);
    }

    removeBook(e){
        if(e.target.className === 'delete'){
            Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
            e.target.parentElement.parentElement.remove();
            UI.showAlert('Remove book success!','success');
        }
    }

    clearFields(){
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const isbn = document.getElementById('isbn');
    
        title.value = '';
        author.value = '';
        isbn.value = '';
    }

    static showAlert(message,className){
        const container = document.querySelector('.container');
        const form = document.getElementById('book-form');
    
        // create div
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(message));
        div.className = className;
    
        container.insertBefore(div,form);
    
        // remove after 3 seconds
        setTimeout(function(){
            div.remove();
        },3000);
    }
}



class Store{
    static key = 'books';

    static getBooks(){
        let books;
        if(localStorage.getItem(Store.key) === null){
            books = []
        }else{
            books = JSON.parse(localStorage.getItem(Store.key));
        }

        return books;
    }

    static displayBooks(){
        let books = Store.getBooks();

        const ui = new UI();

        books.forEach(book => {
            ui.addBookToList(book);
        })
    }

    static removeBook(isbn){
        console.log(isbn)
        let books = Store.getBooks();

        books.forEach((book,index) => {
            if(book.isbn === isbn){
                books.splice(index,1);
                return;
            }
        })

        localStorage.setItem(Store.key,JSON.stringify(books));
    }

    static addBook(newBook){
        let books = Store.getBooks();
        const existingBook = books.find(book => book.ibsn === newBook.isbn);
        if(!existingBook){
            books.push(newBook);
        }

        localStorage.setItem(Store.key,JSON.stringify(books));

    }
}


function loadDocumentListener(){
    const ui = new UI();
    // addEventListener 会改变this指向
    // form.addEventListener('submit',ui.handleSubmit); error
    document.addEventListener('DOMContentLoaded',Store.displayBooks);
    form.addEventListener('submit',e => ui.handleSubmit(e));
    bookList.addEventListener('click',e => ui.removeBook(e))
}

//  UI DOM element
const form = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

loadDocumentListener();