import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Halaman utama
import ListProduct from "./components/ListProduct"; // Halaman produk

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route untuk halaman Home */}
          <Route path="/" element={<Home />} />

          {/* Route untuk halaman ListProduct */}
          <Route path="/products" element={<ListProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
