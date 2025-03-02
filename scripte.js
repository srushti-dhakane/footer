// Function to Open Book and Show Content
function openBook(contentType) {
    const book = document.getElementById("book");
    const bookTitle = document.getElementById("book-title");
    const bookContent = document.getElementById("book-content");

    // Define Content for Each Clickable Item
    const content = {
        contact: { title: "Contact Us", text: "Email: example@example.com\nPhone: +123 456 7890" },
        social: { title: "Follow Us", text: "🔵 Facebook | 🟣 Instagram | 🔷 Twitter" },
       // navigation: { title: "Quick Links", text: "🏠 Home | 📜 About | 📩 Contact" },
        newsletter: { title: "Newsletter", text: "Subscribe to get the latest updates!" },
        copyright: { title: "Copyright Info", text: "© 2025 Your Company. All rights reserved." }
    };

    // Update Book Content
    if (content[contentType]) {
        bookTitle.innerText = content[contentType].title;
        bookContent.innerText = content[contentType].text;
    }

    // Show the Book
    book.classList.add("show-book");
}

// Function to Close the Book
function closeBook() {
    document.getElementById("book").classList.remove("show-book");
}

