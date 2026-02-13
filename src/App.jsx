import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "S. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  // Add book
  const addBook = () => {
    if (!title || !author) return;

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  // Remove book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Search filter
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Management System</h1>

      {/* Search */}
      <input
        className="search"
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Book */}
      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div className="book-card" key={book.id}>
            <div>
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
            </div>
            <button className="remove" onClick={() => removeBook(book.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;