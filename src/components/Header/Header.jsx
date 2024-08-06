import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

export default function Header() {
  const { isAuth, dispatch } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          <span className="navbar-brand-food">Food</span>
          <span className="navbar-brand-man">man</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link" href="#">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link" href="#">
                Order
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" href="#">
                Dashboard
              </Link>
            </li>
            {/* <Link to="/order" className="shop-icon-container me-3">
            <FaShoppingCart className="shop-icon" />
          </Link> */}
          </ul>
          {isAuth ? (
            <div className="">
              <Link
                to="/"
                className="login-btn"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  dispatch({ type: "SET_LOGGED_OUT" });
                  localStorage.removeItem("isLoggedIn"),
                    localStorage.removeItem("loggedUser");
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="">
              <Link to="/auth/login" className="login-btn" style={{ textDecoration: "none" }}>
                Login
                
                
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
