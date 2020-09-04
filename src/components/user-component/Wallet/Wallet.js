import React from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import Header from '../../../common-components/Header/Header';
import Sidebar from '../../../common-components/Sidebar/Sidebar';

import cartzWalletActive from '../../../assets/images/user-component-assets/cartzWalletActive/cartzWalletActive.png';
import cartzMobileArrowRightPink from '../../../assets/images/user-component-assets/cartzMobileArrowRightPink/cartzMobileArrowRightPink.png';

import { wallets } from '../../../mocks/user-component-mocks/user-mocks';

import './Wallet.scss';

export default function Wallet() {
    const size = useWindowSize();

    const switchBgColor = (walletType) => {
        switch(walletType) {
            case "Paytm Wallet":
                return { backgroundColor: "#FFFFFF" };
            case "Master Card":
                return { backgroundColor: "#40404F" };
            case "Visa Card":
                return { backgroundColor: "#132274" };
            case "Cash":
                return { backgroundColor: "#458346" };
            default:
                return { backgroundColor: "#FFFFFF" };
        }
    }

    const switchColor = (walletType) => {
        switch(walletType) {
            case "Paytm Wallet":
                return { color: "#00243E" };
            default:
                return { color: "#FFFFFF" };
        }
    }

    return (
        <React.Fragment>
            {size.width >= 992 ?
                <Header />
            : null}
            <div className="walletContainer">
                {size.width >= 992 ? <div>
                    <Sidebar />
                </div> : null}
                <div>
                    <p>{size.width >= 992 ? null : <img src={cartzMobileArrowRightPink} alt="noImage" />}Wallets & Payments</p>
                    <div className="walletItems">
                        {wallets.map((wallet, index) => {
                            return (
                                <div key={index} className="walletItem" style={switchBgColor(wallet.walletType)}>
                                    <div>
                                        <div>
                                            <p style={switchColor(wallet.walletType)}>{wallet.walletType}</p>
                                            {wallet.walletType === 'Cash' ?
                                                <p style={{ display: 'none' }}></p>
                                            :   
                                                <p style={switchColor(wallet.walletType)}>   
                                                    {wallet.walletAccNo.slice(6)}
                                            </p>}
                                        </div>
                                        <div>
                                            <img src={wallet.walletImage} alt="noImage" />
                                        </div>
                                    </div>
                                    <div>
                                        <p style={switchColor(wallet.walletType)}>{wallet.walletStatus}</p>
                                        <img src={cartzWalletActive} alt="noImage" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <p>+ Add a payment method</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
