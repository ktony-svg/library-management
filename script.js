const books = [
    { title: "1984", author: "George Orwell", available: false, status: "" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", available: true, status: "" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true, status: "" },
    { title: "Things Fall Apart", author: "Chinua Achebe", available: true, status: "" }
];

const bookList = document.getElementById("book-list");

function displayBooks() {
    bookList.innerHTML = ""; 

    books.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = `
            <p>${book.title} by ${book.author} (${book.available ? 'Available' : 'Borrowed'})</p>
            <button onclick="borrowBook(${index})">Borrow</button>
            ${book.available ? '' : `<button onclick="returnBook(${index})">Return</button>`}
            <span> ${book.status} </span>
        `;
        bookList.appendChild(bookDiv);
    });
}

function borrowBook(index) {
    if (books[index].available) {
        books[index].available = false;
        books[index].status = "Borrowed"; // Set status to "Borrowed"
        displayBooks(); 
    } else {
        alert("Book is already borrowed!");
    }
}

function returnBook(index) {
    books[index].available = true;
    books[index].status = "Returned"; // Set status to "Returned"
    displayBooks(); 
}

displayBooks();
