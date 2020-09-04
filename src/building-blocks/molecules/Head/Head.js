import React, { useState } from 'react';

import viewAllRightArrow from '../../../assets/images/home-component-assets/viewAllRightArrow/viewAllRightArrow.png';
import frontArrow from '../../../assets/images/home-component-assets/frontArrow/frontArrow.png';
import backArrow from '../../../assets/images/home-component-assets/backArrow/backArrow.png';

import './Head.css';

export default function Head({ children, data, styles }) {
    const [ targetClassName, setTarget ] = useState('');

    const handleTarget = (e, ele) => {
        if(children && children.props) {
            let className = children.props.className;
            setTarget(className);
        } else {
            let className = children[1].props.className;
            setTarget(className);
        }

        if(targetClassName && ele === 'left') {
            handleScrollRight(targetClassName);
        }

        if(targetClassName && ele === 'right') {
            handleScrollLeft(targetClassName);
        }
    };

    const handleScrollLeft = (targetClassName) => {
        console.log('scrollLeft');
        if(targetClassName) {
            document.getElementsByClassName(targetClassName)[0].scrollLeft += 100;
        }
    };

    const handleScrollRight = (targetClassName) => {
        console.log('scrollRight');
        if(targetClassName) {
            document.getElementsByClassName(targetClassName)[0].scrollLeft -= 100;
        }
    };

    return (
        <React.Fragment>
            <div className="headContainer" style={styles.headContainer}>
                <div className="headLeft" style={styles.headLeft}>
                    <div className="headTitle">
                        <p style={styles.headTitle}>{data.title}</p>
                    </div>
                    {
                        !data.subTitle ? null :
                        <div className="headSubTitle">
                            <p style={styles.headSubTitle}>{data.subTitle}</p>
                        </div>
                    }
                </div>
                <div className="headRight" style={styles.headRight}>
                    <div className="headViewAll" style={styles.headViewAll}>
                        <p style={styles.headViewAll}>{data.linkTitle}</p>
                        <img src={viewAllRightArrow} alt="noImage" height="16" />
                    </div>
                    <div className="headNavigator" style={styles.headNavigator}>
                        <button className="headNavigatorLeft" style={styles.headNavigatorLeft} onClick={(e) => handleTarget(e,'left')}>
                            <img src={backArrow} alt="noImage" height="16" />
                        </button>
                        <button className="headNavigatorRight" style={styles.headNavigatorRight} onClick={(e) => handleTarget(e, 'right')}>
                            <img src={frontArrow} alt="noImage" height="16" />
                        </button>
                    </div>
                </div>
            </div>
            {children}
        </React.Fragment>
    )
};
