import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            
            <div >
                <Link to="/">Home</Link>
                <Link to="/Orders">Order</Link>
                <Link to="/Order Review">Order Review</Link>
                <Link to="/Inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>  
                </div>
        </nav>
        
    );
};

export default Header;
