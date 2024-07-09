import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addNewProduct, getAllProducts } from "../redux/product.action";
import "../style/ProductList.css";
import AddAndEditProductModal from "../components/AddAndEditProductModal";
import { SearchAndNav } from "../components/SearchAndNav";
import { Pagination } from "../components/Pagination";

const initialData = {
  name: "",
  price: "",
  description: "",
  category: "",
  stock: "",
  rating: "",
  manufacturer: "",
};

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const { products, loading, error } = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts(searchTerm, page));
  }, [searchTerm, page]);

  const handleEdit = (newProduct) => {
    dispatch(addNewProduct(newProduct));
  };

  return (
    <div className="product-list">
      <SearchAndNav
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setIsOpen={setIsOpen}
        products={products}
      />
      {loading && !error && (
        <h1 style={{ color: "#fff", textAlign: "center" }}> Loading...</h1>
      )}
      {!loading && error && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "red" }}>Server Error 500!</h2>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      )}
      {products && !loading && !error && (
        <>
          <AddAndEditProductModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            handleEdit={handleEdit}
            product={initialData}
          />
          <Pagination page={page} setPage={setPage} products={products} />
          {products.length === 0 && !loading && !error && (
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "teal" }}>No Data Found!</h2>
              <button onClick={() => window.location.reload()}>Refresh</button>
            </div>
          )}

          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
