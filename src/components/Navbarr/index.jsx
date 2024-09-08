import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const index = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Ertiga Store
        </Link>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Cari produk..."
          className="navbar-search"
        />
        <button type="button" className="navbar-search-btn">
          Cari
        </button>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="navbar-link">
          Keranjang
        </Link>
        <Link to="/orders" className="navbar-link">
          Pesanan
        </Link>
        <Link to="/profile" className="navbar-link">
          Akun
        </Link>
      </div>
    </nav>
  );
};

export default index;
