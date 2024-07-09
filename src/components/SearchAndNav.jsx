import React, { useCallback, useEffect, useRef, useState } from "react";
import "../style/ProductList.css";

// Debounce function
const searchDebounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const SearchAndNav = ({
  searchTerm,
  setSearchTerm,
  setIsOpen,
  products,
}) => {
  const [query, setQuery] = useState(searchTerm);
  const debouncedSetSearchTerm = useCallback(
    searchDebounce(setSearchTerm, 600),
    []
  );

  useEffect(() => {
    debouncedSetSearchTerm(query);
  }, [query]);

  return (
    <div className="banner">
      <h2>
        <strong>Total Products:</strong> {products.length}
      </h2>
      <div className="search-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search products by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <button onClick={() => setIsOpen(true)}>Add New Product</button>
    </div>
  );
};
