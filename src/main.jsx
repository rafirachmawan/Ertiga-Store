import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Halaman utama
import ListProduct from "./components/ListProduct"; // Halaman produk
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Route untuk halaman Home */}
        <Route path="/" element={<Home />} />

        {/* Route untuk halaman ListProduct */}
        <Route path="/products" element={<ListProduct />} />
      </Routes>
    </Router>
  </StrictMode>
);
