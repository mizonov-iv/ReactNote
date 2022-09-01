import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark pt-4'>
            <div className='navbar-brand mx-3'>
                Note App
            </div>

            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/' exact>Главная</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/about' exact>О приложении</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;