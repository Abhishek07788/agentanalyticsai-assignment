import React, { memo, useState } from "react";
import "../style/modal.css";

const AddAndEditProductModal = ({ product, handleEdit, isOpen, onClose }) => {
  const [productForm, setProductForm] = useState({ ...product });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(productForm);
    onClose();
  };

  return (
    <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Product Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={productForm.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={productForm.description}
            onChange={handleInputChange}
            required
          />
          <div className="Input-Box">
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                value={productForm.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={productForm.category}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="Input-Box">
            <div>
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={productForm.stock}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={productForm.rating}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <label htmlFor="manufacturer">Manufacturer:</label>
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            value={productForm.manufacturer}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default memo(AddAndEditProductModal);
