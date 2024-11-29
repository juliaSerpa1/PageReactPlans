import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Header = () => {

    const { getCartQuantity } = useCart();

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className="container">
                    <ul className="nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" style={{ color: 'white' }}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/solutions" style={{ color: 'white' }}>Solutions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/plans" style={{ color: 'white' }}>Plans</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" style={{ color: 'white' }}>About</NavLink>
                        </li>
                    </ul>
                    <div>
                        <NavLink to="/cart">
                            <button className="btn btn-dark">
                                <img loading="lazy" className="carrinho" src="https://img.icons8.com/?size=100&id=0DBkCUANmgoQ&format=png&color=FFFFFF" alt='carrinho'/>
                                <span>{getCartQuantity()}</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
        </nav>
    );
};

export default Header;