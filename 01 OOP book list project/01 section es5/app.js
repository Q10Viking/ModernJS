//  Book 
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//  UI
function UI(){}

//  处理表格提交
UI.prototype.handleSubmit = function(e) {
    e.preventDefault();

    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const isbn = document.getElementById('isbn');
    const ui = new UI();

    if(ui.validForm(title.value,author.value,isbn.value)){
        const book = new Book(title.value,author.value,isbn.value);
    
        ui.addBookToList(book);
        ui.clearFields();
        UI.showAlert('Add book success!','success');
    }

}



UI.prototype.addBookToList = function(book){
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


UI.showAlert = function(message,className){
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


UI.prototype.clearFields = function(){
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const isbn = document.getElementById('isbn');

    title.value = '';
    author.value = '';
    isbn.value = '';
}


UI.prototype.removeBook = function(e){
    if(e.target.className === 'delete'){
        e.target.parentElement.parentElement.remove();
        UI.showAlert('Remove book success!','success');
    }
}


UI.prototype.validForm = function(title,author,isbn){
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert('Please fill the fields!','error');
        return false;
    }else{
        return true;
    }
}

function loadDocumentListener(){
    const ui = new UI();
    form.addEventListener('submit',ui.handleSubmit);
    bookList.addEventListener('click',ui.removeBook)
}

//  UI DOM element
const form = document.getElementById('book-form');
const bookList = document.getElementById('book-list');

loadDocumentListener();


