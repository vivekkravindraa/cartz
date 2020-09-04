import React from 'react';

import cartzMobileArrowLeftBlack from '../../../assets/images/user-component-assets/cartzMobileArrowLeftBlack/cartzMobileArrowLeftBlack.png';

import { payments } from '../../../mocks/user-component-mocks/user-mocks';

import './Payments.scss';

export default function Payments() {
    return (
        <div className="paymentsContainer">
            <div className="paymentsHeader">
                <img src={cartzMobileArrowLeftBlack} alt="noImage" />
                <p>Payment</p>
            </div>
            <div className="paymentsAmountPayable">
                <p>Amount Payable</p>
                <p>$ 481.14</p>
            </div>
            <div className="payments">
                {payments.map((payment, index) => {
                    return (
                        <div key={index}>
                            <img src={payment.src} alt="noImage" />
                            <p>{payment.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
