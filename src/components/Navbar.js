import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand fw-bold text-info" to="/">
          Organize My Brain
        </Link>

        {/* Nav Links */}
        <div className="navbar-nav ms-auto">
          <Link className="nav-link mx-2" to="/">
            Home
          </Link>
          <Link className="nav-link mx-2" to="/todos">
            Todos
          </Link>
          <Link className="nav-link mx-2" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
