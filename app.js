document.body.style.backgroundColor = `rgba(${offsetX},${offsety},0)`;


//Book constructor
function Book(title,author,isbn){
    this.title =title;
    this.author = author;
    this.isbn = isbn;
}
//UI constructor
function UI(){}
UI.prototype.addBookToList= function (book){
//creating table body
const list = document.getElementById('book-list');
//row creation
const row = document.createElement('tr');
 
row.innerHTML =`<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="delete">X</a></td>`;

list.appendChild(row);

} 
//clearfields
UI.prototype.clearfields = function(){
    title.value = '';
    author.value = '';
    isbn.value = '';

}
//validation-show alert
UI.prototype.showAlert = function (message,className){
const form = document.getElementById('book-form');
const container = document.querySelector('.container');
const div = document.createElement('div');
div.className = `alert ${className}`;
div.appendChild(document.createTextNode(message));
container.insertBefore(div,form);

setTimeout(function(){
    document.querySelector('.alert').remove();
},3000)
}
//event listener
document.getElementById('book-form').addEventListener('submit',function(e){
e.preventDefault();

//form values
const title = document.getElementById('title').value,
author=document.getElementById('author').value,
isbn=document.getElementById('isbn').value;

const book = new Book(title,author,isbn);

//instantiate Ui
const ui=new UI(book);

//validation
if(title === '' || author === '' || isbn === ''){
    ui.showAlert('Please fill the fields','error');
}else{
//add book to list
ui.addBookToList(book);

//clear fields
ui.clearfields();
//validation
ui.showAlert('Sucessfully added','success');

}
})