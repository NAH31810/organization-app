import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const navStyle = {
    display: "flex",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#6d676b",
    color: "white",
    listStyle: "none",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#333",
        color: "#fff",
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/todos" style={{ color: "#fff", textDecoration: "none" }}>
        Todos
      </Link>
      <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
