const myLibrary = [];

function book (name,author,pages,read){
   this.title = prompt("what book do you want to store")
   this.author = prompt("who is the author of the book")
   this.pages= prompt("how many pages is it?")
   this.read = prompt("have it been read?")
}

function addBookToLibrary(){
    let info = new book()
    myLibrary.push(info)
}

addBookToLibrary()
console.log(myLibrary)
let content = document.querySelector("table")
let row = document.createElement("tr")
let addtitle = document.createElement("th")
let addauthor = document.createElement("th")
let addpage = document.createElement("th")
let addread = document.createElement("th")

row.appendChild(addtitle)
row.appendChild(addauthor)
row.appendChild(addpage)
row.appendChild(addread)
content.appendChild(row)


myLibrary.forEach(book => {
    addtitle.innerHTML = book.title
    addauthor.innerHTML = book.author
    addpage.innerHTML = book.pages
    addread.innerHTML = book.read


    
});
