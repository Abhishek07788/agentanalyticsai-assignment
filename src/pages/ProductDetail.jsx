import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getSingleProduct } from "../redux/product.action";
import "../style/ProductDetail.css";
import AddAndEditProductModal from "../components/AddAndEditProductModal";

const ProductDetail = () => {
  const { productId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    singleProduct,
    details_loading: loading,
    error,
  } = useSelector((store) => store.product);

  useEffect(() => {
    if (productId) {
      dispatch(getSingleProduct(productId));
    }
  }, [productId]);

  const handleEdit = (editedProduct) => {
    dispatch(editProduct(productId, editedProduct));
  };

  return (
    <>
      {loading && !error && (
        <h1 style={{ color: "#fff", textAlign: "center" }}> Loading...</h1>
      )}
      {!loading && error && (
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "red" }}>Server Error 500!</h1>
          <button
            style={{ background: "#618be0", marginRight: "4px" }}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      )}
      {singleProduct && !loading && !error && (
        <div className="product-detail">
          <h1>{singleProduct.name}</h1>
          <p className="description">{singleProduct.description}</p>
          <p className="price">${singleProduct.price}</p>
          <div className="additional-info">
            <p>
              <strong>Category:</strong> {singleProduct.category}
            </p>
            <p>
              <strong>Stock:</strong> {singleProduct.stock}
            </p>
            <p>
              <strong>Rating:</strong> {singleProduct.rating} / 5
            </p>
            <p>
              <strong>Manufacturer:</strong> {singleProduct.manufacturer}
            </p>
            <button onClick={() => navigate("/")}>Back</button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ marginLeft: "4px" }}
            >
              Edit
            </button>
          </div>
          <AddAndEditProductModal
            product={singleProduct}
            isOpen={isOpen}
            onClose={() => setIsOpen(!isOpen)}
            handleEdit={handleEdit}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetail;
