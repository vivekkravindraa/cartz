import React from 'react';

import Header from '../../../common-components/Header/Header';
import ProductSpecification from '../ProductSpecification/ProductSpecification';
import Footer from '../../../common-components/Footer/Footer';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './ProductInformation.css';

export default function ProductInformation() {
    return (
        <div className="productInformationContainer">
            <Header />
            <div className="productInformation">
                <div className="productInformationLeftContent">
                    <p className="productInformationName">Apple White 2nd Gen AirPods with Charging Case (White, True Wireless)</p>
                    <p className="productInformationPageHeading">Full Specifications and Features</p>
                </div>
                <div className="productInformationRightContent">
                    <div className="productInformationPrices">
                        <p className="productInformationSavingPrice">Saving $ 19.03</p>
                        <p className="productInformationMarketPrice">$ 59.23</p>
                        <p className="productInformationPrice">$ 40.23</p>
                        <p className="productInformationTaxes">(Incl. of all taxes)</p>
                    </div>
                    <div className="productInformationBuy">
                        <button>BUY</button>
                    </div>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Specifications</Tab>
                </TabList>
                <TabPanel>
                    <p>Product Overview content will go here..</p>
                </TabPanel>
                <TabPanel>
                    <ProductSpecification />
                </TabPanel>
            </Tabs>
            <Footer />
        </div>
    )
}
