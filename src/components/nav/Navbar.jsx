import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.scss';
import SiteLogo from './img/site-logo.svg';
import HireMeImg from './img/hire-me.svg';

function Navbar() {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className='container nav__wrapper'>
            <div className='nav__container'>
                <div className='site__logo__item'>
                    <a href='/'>
                        <img src={SiteLogo} alt="Site Logo" />
                    </a>
                    <a href="#">
                        <img src={HireMeImg} alt="Hire Me" />
                    </a>
                </div>
                <nav className='navbar'>
                    <ul className="nav__content">
                        <li className='navMenu'>
                            <select className='language__select' onChange={changeLanguage} defaultValue={i18n.language}>
                                <option value="en">EN</option>
                                <option value="uz">UZ</option>
                                <option value="fr">FR</option>
                            </select>
                        </li>
                        <li className='navMenu'><NavLink className='nav__link' to="/portfolio">PORTFOLIO</NavLink></li>
                    </ul>
                    <ul className='navItem'>
                        <li className='navMenu'><NavLink className='nav__link' to="/blog">BLOG</NavLink></li>
                        <li className='navMenu'><NavLink className='nav__link' to="/cv">CV</NavLink></li>
                        <li className='navMenu'><NavLink className='nav__link' to="/store">STORE</NavLink></li>
                        <li className='navMenu'><NavLink className='nav__link' to="/freelance">FREELANCE</NavLink></li>
                        <li className='navMenu'><NavLink className='nav__link' to="/about">ABOUT ME</NavLink></li>
                        <li className='navMenu'><NavLink className='nav__link' to="/contact">CONTACT</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
