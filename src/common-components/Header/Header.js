import React from 'react';

import menuBars from '../../assets/images/home-component-assets/menuBars/menuBars.png';
import home from '../../assets/images/home-component-assets/home/home.svg';
import arrowDown from '../../assets/images/home-component-assets/arrowDown/arrowDown.svg';
import location from '../../assets/images/home-component-assets/location/location.png';
import profile from '../../assets/images/home-component-assets/profile/profile.png';
import bag from '../../assets/images/home-component-assets/bag/bag.png';
import favourite from '../../assets/images/home-component-assets/favourite/favourite.svg';
import cartzsLogo from '../../assets/images/home-component-assets/cartzsLogo/cartzsLogo.png';

import './Header.css';

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeftContent">
                <div className="headerLogo">
                    <img style={{ marginLeft: '5px' }} src={menuBars} alt="noImage" height="32" />
                    <img src={cartzsLogo} alt="noImage" height="32" />
                </div>
                <div className="headerHome">
                    <img src={home} alt="noImage" height="16" />
                    <p>HOME</p>
                    <img src={arrowDown} alt="noImage" height="24" />
                </div>
            </div>
            <div className="headerMiddleContent">
                <div className="headerSearch">
                    <input id="headerSearchInput" type="text" placeholder="Search for anything.." />
                </div>
            </div>
            <div className="headerRightContent">
                <div className="headerDropdown">
                    <img src={arrowDown} alt="noImage" height="24" />
                    <p>Category</p>
                </div>
                <div className="headerLocation">
                    <img src={location} alt="noImage" height="24" />
                    <p>Fresno, Usa..</p>
                </div>
                <div className="headerSignIn">
                    <img src={profile} alt="noImage" height="24" />
                    <p>Login</p>
                </div>
                <div className="headerFavourite">
                    <img src={favourite} alt="noImage" height="24" />
                </div>
                <div className="headerCart">
                    <img src={bag} alt="noImage" height="24" />
                </div>
            </div>
        </div>
    )
}
