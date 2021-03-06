import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-img">
               <img src={logo} alt="" />
            </div>
            <nav>
                <menu className="container">
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage Inventory</a>
                </menu>
                
            </nav>
            
        </div>
    );
};

export default Header;