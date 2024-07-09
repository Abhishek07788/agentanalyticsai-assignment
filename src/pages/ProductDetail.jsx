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
  const { singleProduct, loading, error } = useSelector(
    (store) => store.product
  );

  useEffect(() => {
    if (productId) {
      dispatch(getSingleProduct(productId));
    }
  }, [productId]);

  const handleEdit = (editedProduct) => {
    dispatch(editProduct(productId, editedProduct));
  };

  return (
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

      {loading && !singleProduct && !error && <div>Loading...</div>}
      {!loading && !singleProduct && error && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "red" }}> Something Went Wrong!</h2>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
