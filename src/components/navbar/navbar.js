import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="col">
            <Link to="/" className="link"><h1 className="home">Home</h1></Link>
            </div>
            <div className="col">
            <Link to="/cartPage" className="link"><h1 className="cart">Cart</h1></Link>
            </div>
        </div>
    );
}

export default Navbar;