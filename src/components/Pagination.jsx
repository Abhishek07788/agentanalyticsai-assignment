import React from "react";

export const Pagination = ({ page, setPage, products }) => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        gap: "8px",
        marginTop: "4px",
      }}
    >
      <button
        style={{ background: page <= 1 ? "grey" : "" }}
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <button style={{ background: "#fff", color: "#000" }}>
        <strong>{page}</strong>
      </button>
      <button
        style={{ background: products.length < 6 ? "grey" : "" }}
        disabled={products.length < 6}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};
