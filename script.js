const books = [
    { title: "1984", author: "George Orwell", available: false },
    { title: "To Kill a Mockingbird", author: "Harper Lee", available: true },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true },
    { title: "Things Fall Apart", author: "Chinua Achebe", available: true }
];

const bookList = document.getElementById("book-list");

function displayBooks() {
    bookList.innerHTML = ""; // Clear existing entries

    books.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.innerHTML = `
            <p>${book.title} by ${book.author} (${book.available ? 'Available' : 'Borrowed'})</p>
            <button onclick="borrowBook(${index})">Borrow</button>
            ${book.available ? '' : `<button onclick="returnBook(${index})">Return</button>`} 
        `;
        bookList.appendChild(bookDiv);
    });
}

function borrowBook(index) {
    if (books[index].available) {
        books[index].available = false;
        displayBooks(); // Update the display
    } else {
        alert("Book is already borrowed!");
    }
}

function returnBook(index) {
    books[index].available = true;
    displayBooks(); // Update the display
}

displayBooks(); // Initial display of books
