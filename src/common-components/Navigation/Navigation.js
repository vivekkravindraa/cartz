import React, { useState } from 'react';
import { useWindowSize } from '../../utils/useWindowSize';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { navigationItems } from './NavigationItemsJsonData';
import { customHistory } from '../../App';

import hexagon from '../../assets/images/home-component-assets/hexagon/hexagon.svg';
import closeWhite from '../../assets/images/home-component-assets/closeWhite/closeWhite.png';
import plus from '../../assets/images/home-component-assets/plus/plus.png';

import './Navigation.css';

export default function Navigation() {
    const size = useWindowSize();
    const [ moreNav, setMoreNav ] = useState(false);

    const handleClick = (path) => customHistory.push(path);

    const handleHexagon = (e) => {
        if(moreNav) {
            setMoreNav(false);
        } else {
            setMoreNav(true);
        }
    };

    return (
        <div className="navigationContainer">
            <div className="navigationItems">
                {size.width >= 992 ? navigationItems.map((navigationItem, index) => {
                    return (
                        <Router key={index}>
                            <Link
                                to={navigationItem.path}
                                className="navigationItem"
                                key={index}
                                onClick={(e) => handleClick(navigationItem.path)}
                            >
                                <img
                                    src={navigationItem.imageSource}
                                    alt="noImage"
                                    width={navigationItem.width}
                                />
                                <p>{navigationItem.title}</p>
                            </Link>
                        </Router>
                    )
                }) : <React.Fragment>
                    {navigationItems.slice(0, 4).map((navigationItem, index) => {
                        return (
                            <Router key={index}>
                                <Link
                                    to={navigationItem.path}
                                    className="navigationItem"
                                    key={index}
                                    onClick={(e) => handleClick(navigationItem.path)}
                                >
                                    <img
                                        src={navigationItem.imageSource}
                                        alt="noImage"
                                        width={navigationItem.width}
                                    />
                                    <p>{navigationItem.title}</p>
                                </Link>
                            </Router>
                        )
                    })}
                    {moreNav ? navigationItems.slice(4,7).map((navigationItem, index) => {
                        return (
                            <Router key={index}>
                                <Link
                                    to={navigationItem.path}
                                    className="navigationItem"
                                    key={index}
                                    onClick={(e) => handleClick(navigationItem.path)}
                                >
                                    <img
                                        src={navigationItem.imageSource}
                                        alt="noImage"
                                        width={navigationItem.width}
                                    />
                                    <p>{navigationItem.title}</p>
                                </Link>
                            </Router>
                        )
                    }) : null}
                    {moreNav ? <div className="navigationCircle"></div> : null}
                </React.Fragment>}
            </div>
            <div className="navigationHexagon" onClick={(e) => handleHexagon(e)}>
                <img src={hexagon} alt="noImage" />
                {moreNav ?
                    <img src={closeWhite} alt="noImage" height="16" />
                :
                    <img src={plus} alt="noImage" height="16" />}
            </div>
        </div>
    )
}
