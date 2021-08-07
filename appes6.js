class Book{
constructor(title,author,isbn){
    this.title =title;
    this.author = author;
    this.isbn = isbn;
}
};
class UI{
addBookToList(book){
//creating table body
const list = document.getElementById('book-list');
//row creation
const row = document.createElement('tr');
 
row.innerHTML =`<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="delete">X</a></td>`;

list.appendChild(row);
};
clearfields(){
    title.value = '';
    author.value = '';
    isbn.value = '';
};
showAlert(message,className){
    const form = document.getElementById('book-form');
const container = document.querySelector('.container');
const div = document.createElement('div');
div.className = `alert ${className}`;
div.appendChild(document.createTextNode(message));
container.insertBefore(div,form);

setTimeout(function(){
    document.querySelector('.alert').remove();
},2500)
}
dltbook(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
}}}

//event listener for adding books
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
    });
    
    //event listener delete book 
    document.querySelector('#book-list').addEventListener('click',function(e){
        const ui=new UI();
        ui.dltbook(e.target);
        ui.showAlert('Book removed','success');
    
        e.preventDefault();
    });