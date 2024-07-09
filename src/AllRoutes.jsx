import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
    </Routes>
  );
};
