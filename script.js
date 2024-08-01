const myLibrary = []

// the object constractor 
function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//store the data in an array
function addBookToLibrary(title,author,pages,read){
    const info = new Book(title,author,pages,read)
    myLibrary.push(info)
    displaytheinfo();
     
}
// display the data in the window
function displaytheinfo(){
    const book = document.querySelector(".book")
    book.innerHTML = "";
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div")
        card.classList.add("card")
        book.appendChild(card)
        for (let key in myLibrary){
            const para = document.createElement("p")
            para.textContent = (`${key}: ${myLibrary[key]}`)
            card.appendChild(para)
        }

    })   
}


//bring up the input 
const newBook = document.querySelector('.addBtn')
newBook.addEventListener("click",addBook)


function addBook(){
    const addForm = document.getElementById('addform');
    if (addForm){
        addForm.style.display = 'block';
    }
    document.getElementById('form').style.display = "block";
}

//transfer the input data to variable data

const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener("click", takeInData) 

function takeInData(){
    let title = document.querySelector("#title").value
    let author = document.querySelector("#author").value
    let pages = document.querySelector("#pages").value
    let read = document.querySelector("#read").value

    addBookToLibrary(title,author,pages,read)

    document.getElementById('form').reset();
    document.getElementById('form').style.display = "none"
}

const cancel = document.querySelector(".cancel")

cancel.addEventListener("click", clearForm);

function clearForm(){
    document.getElementById('form').reset()
    document.getElementById('form').style.display = "none"
}




