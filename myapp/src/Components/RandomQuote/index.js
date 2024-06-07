import React, { useState } from "react";
import "./index.css";

import { FaSearch } from "react-icons/fa";

const RandomQuote = () => {
  let quotes = [];

  const storeQuotes = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  };

  storeQuotes();

  const [quote, setQuote] = useState({
    text: "Well begun is half done.",
    author: "Aristotle",
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const author = searchQuery;
      const currQuote = filterQuotes(quotes, author);
      setQuote(currQuote[0]);
    }
  };

  function filterQuotes(quotes, inputString) {
    return quotes.filter((quote) =>
      quote.author.toLowerCase().includes(inputString.toLowerCase())
    );
  }

  const randomQuote = () => {
    const currQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(currQuote);
  };

  return (
    <div className="quote-container">
      <h4 className="quote">"{quote.text}"</h4>
      <p>- {quote.author.split(",")[0]}</p>
      <div className="line"></div>

      <button className="button" onClick={randomQuote}>
        Generate Quote
      </button>

      <div className="search-container">
        <div className="search-bar">
          <input
            className="search-input"
            type="search"
            placeholder="Search by author"
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          ></input>
          <FaSearch id="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
