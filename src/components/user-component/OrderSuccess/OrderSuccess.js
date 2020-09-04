import React from 'react';

import cartzMobileArrowLeftBlack from '../../../assets/images/user-component-assets/cartzMobileArrowLeftBlack/cartzMobileArrowLeftBlack.png';
import cartzOrderSuccess from '../../../assets/images/user-component-assets/cartzOrderSuccess/cartzOrderSuccess.png';

import './OrderSuccess.scss';

export default function OrderSuccess() {
    return (
        <div className="orderSuccessContainer">
            <div className="orderSuccessHeader">
                <img src={cartzMobileArrowLeftBlack} alt="noImage" />
                <p>Order Success</p>
            </div>
            <div className="orderSuccessMessage">
                <img src={cartzOrderSuccess} alt="noImage" />
            </div>
        </div>
    )
}
