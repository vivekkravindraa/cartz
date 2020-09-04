import React from 'react';

import cartzMobileArrowLeftBlack from '../../../assets/images/user-component-assets/cartzMobileArrowLeftBlack/cartzMobileArrowLeftBlack.png';

import { accountOptions } from '../../../mocks/user-component-mocks/user-mocks';

import './Account.scss';

export default function Account() {
    return (
        <div className="accountContainer">
            <div className="accountHeader">
                <img src={cartzMobileArrowLeftBlack} alt="noImage" />
                <p>Account</p>
            </div>
            <div className="accountOptions">
                {accountOptions.map((option, index) => {
                    return (
                        <div key={index}>
                            <img src={option.src} alt="noImage" />
                            <p>{option.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
