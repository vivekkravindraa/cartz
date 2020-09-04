import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import cartzMobileFilters from '../../../assets/images/user-component-assets/cartzMobileFilters/cartzMobileFilters.svg';
import cartzMobileInvoice from '../../../assets/images/user-component-assets/cartzMobileInvoice/cartzMobileInvoice.svg';
import cartzMobileMastercardS from '../../../assets/images/user-component-assets/cartzMobileMastercard/cartzMobileMastercardS.png';
import cartzMobileMail from '../../../assets/images/user-component-assets/cartzMobileMail/cartzMobileMail.png';
import cartzMobileMapPin from '../../../assets/images/user-component-assets/cartzMobileMapPin/cartzMobileMapPin.svg';
import cartzMobileArrowRightBlack from '../../../assets/images/user-component-assets/cartzMobileArrowRightBlack/cartzMobileArrowRightBlack.png';
import cartzMobileDownload from '../../../assets/images/user-component-assets/cartzMobileDownload/cartzMobileDownload.svg';
import cartzMobileArrowDownPink from '../../../assets/images/user-component-assets/cartzMobileArrowDownPink/cartzMobileArrowDownPink.svg';
import cartzMobileArrowLeftBlack from '../../../assets/images/user-component-assets/cartzMobileArrowLeftBlack/cartzMobileArrowLeftBlack.png';
import cartzFilterSelected from '../../../assets/images/user-component-assets/cartzFilterSelected/cartzFilterSelected.png';
import cartzFilterDeselected from '../../../assets/images/user-component-assets/cartzFilterDeselected/cartzFilterDeselected.png';

import Header from '../../../common-components/Header/Header';
import Sidebar from '../../../common-components/Sidebar/Sidebar';
import ProductItems from '../../../building-blocks/molecules/Product/ProductItems';

import {
    orderAgainProducts
} from '../../../building-blocks/molecules/Product/ProductItemsJsonData';

import {
    orderAgainProductStyles
} from '../../../building-blocks/molecules/Product/ProductStyles';

import {
    myOrdersFilters,
    myOrdersFiltersMobile,
    myOrdersList,
    // myOrdersListMobile,
    myOrdersRecentItems,
    myOrdersFiltersPopupOptions
} from '../../../mocks/user-component-mocks/user-mocks';

import './MyOrders.scss';

export default function MyOrders() {
    const size = useWindowSize();
    const [ toggleTab, setToggleTab ] = useState(false);
    const [ selectedOption, setSelectedOption ] = useState('');
    const [ selectedSubOptions, setSelectedSubOptions ] = useState([]);
    const [ selectedId, setSelectedId ] = useState(0);
    const [ seeFilters, setSeeFilters ] = useState(false);

    useEffect(() => {
        function handleResize() {
          setToggleTab(false);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const myOrdersMobileFiltersTabHandler = (title) => {
        if(title === 'Order again') {
            size.width >= 992 ? setToggleTab(false) : setToggleTab(true);
        } else {
            setToggleTab(false);
        }
    }

    const filterSelectedOptions = (title) => {
        setSelectedId(0);
        setSelectedSubOptions([]);
        let resultedOption = myOrdersFiltersPopupOptions.find((option) => {
            return option.title === title ? option : null;
        });

        let optionSelected = resultedOption.title;
        let subOptionsSelected = resultedOption.subOptions;
        console.log('resultedOptions', resultedOption.subOptions);

        setSelectedOption(optionSelected);
        setSelectedSubOptions(subOptionsSelected);
    }

    const toggleFilterPopup = () => {
        if(!seeFilters) {
            setSeeFilters(true);
        } else {
            setSeeFilters(false);
        }
    }

    return (
        <React.Fragment>
            {size.width >= 992 ? <Header /> : null}
            <div className="myOrdersContainer">
                {size.width >= 992 ? <div>
                        <Sidebar />
                    </div>
                : null}
                <div className="myOrdersContent">
                    <div className="myOrdersFilters">
                        <div className="myOrdersFiltersHeader">
                            {size.width >= 992 ? null : <p><img src={cartzMobileArrowLeftBlack} alt="noImage" />Orders</p>}
                            <img src={cartzMobileFilters} alt="noImage" onClick={() => toggleFilterPopup()} />
                            <p>Filters</p>
                        </div>
                        {size.width >= 992 ? <div className="myOrdersFilterItems">
                            {myOrdersFilters.map((filter, index) => {
                                return <div key={index}>
                                    <p>{filter.title}</p>
                                </div>
                            })}
                        </div> : <div className="myOrdersFilterItems">
                            {myOrdersFiltersMobile.map((filter, index) => {
                                return <div key={index} onClick={() => myOrdersMobileFiltersTabHandler(filter.title)}>
                                    <p>{filter.title}</p>
                                </div>
                            })}
                        </div>}
                    </div>
                    {!toggleTab && <div className="myOrdersList">
                        {myOrdersList.map((order, index) => {
                            return <div key={index} className="myOrdersListItem">
                                <div>
                                    <div>
                                        <p>-</p>
                                    </div>
                                    <div>
                                        <p>Order Id: {order.orderId}</p>
                                        <div>
                                            <p>{order.orderedDate}</p>
                                            <p>{order.orderedTime}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{order.orderPrice}</p>
                                        <div>
                                            <img src={cartzMobileMastercardS} alt="noImage" />
                                            <p>{order.orderPaymentType}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="myOrdersOrderedProducts">
                                    {/* {(size.width >= 992 ? order.orderedProducts.slice(0, 2) : myOrdersListMobile).map((product, index) => { */}
                                    {(size.width >= 992 ? order.orderedProducts.slice(0, 2) : order.orderedProducts.slice(0,3)).map((product, index) => {
                                        return (
                                            // size.width >= 992 ?
                                            <div key={index}>
                                                <div>
                                                    <p>{product.productTitle}</p>
                                                    <p>{product.productPrice}</p>
                                                    <div>
                                                        <p>View Details <img src={cartzMobileArrowRightBlack} alt="noImage" /></p>
                                                        <p>Qty: {product.productQuantity}</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img src={product.productImage} alt="noImage" />
                                                </div>
                                            </div>
                                            // :
                                            // <div key={index}>
                                            //     <div>
                                            //         <p>{product.productTitle}</p>
                                            //         <div>
                                            //             <p>{product.orderId}</p>
                                            //             <p>.</p>
                                            //             <p>{product.quantity}</p>
                                            //         </div>
                                            //         <div style={{ backgroundColor: product.orderStatus === 'Delivered' ? '#3D953D' : '#FE0174' }}>
                                            //             <p>{product.orderStatus}</p>
                                            //         </div>
                                            //         <div>
                                            //             <p>{product.productPrice}</p>
                                            //             <p>.</p>
                                            //             <p>{product.orderedDate}</p>
                                            //         </div>
                                            //     </div>
                                            //     <div>
                                            //         <img src={product.productImage} alt="noImage" />
                                            //     </div>
                                            // </div>
                                        )
                                    })}
                                </div>
                            </div>
                        })}
                        <div className="myOrdersViewMore">
                            <img src={cartzMobileArrowDownPink} alt="noImage" />
                            <p>View 2 More Items</p>
                        </div>
                    </div>}
                    {size.width <= 992 && toggleTab && <div className="myOrdersOrderAgain">
                        <ProductItems productItems={orderAgainProducts.slice(0,3)} styles={orderAgainProductStyles} />
                    </div>}
                    {!toggleTab && <div className="myOrdersTracking">
                        <div className="myOrdersTrackingDetails">
                            <div>
                                <div>
                                    <div></div>
                                </div>
                                <div>
                                    <p>Ordered</p>
                                    <p>Thu, 18th Dec, 2020</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div></div>
                                </div>
                                <div>
                                    <p>Delivered</p>
                                    <p>Fri, 19th Dec, 2020</p>
                                    <p>Your Order Has Been Successfully Delivered.</p>
                                </div>
                            </div>
                            <div>
                                <p>Return Policy Valid Till Dec 29 <span>LEARN MORE</span></p>
                            </div>
                        </div>
                        <div className="myOrdersTrackingDetailsControls">
                            <button>RETURN / EXCHANGE</button>
                            <button>NEED HELP ?</button>
                        </div>
                    </div>}
                    {!toggleTab &&<div className="myOrdersEmail">
                        <div>
                            <img src={cartzMobileMail} alt="noImage" />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>Rahulroy@gmail.com</p>
                            <p>Get Invoice <img src={cartzMobileDownload} alt="noImage" /></p>
                        </div>
                    </div>}
                    {!toggleTab && <div className="myOrdersUser">
                        <div>
                            <img src={cartzMobileMapPin} alt="noImage" />
                        </div>
                        <div>
                            <p>Rahul Roy</p>
                            <p>Al Marsa Street, 66, Dubai Marina (2,710.67 km) P.O. Box 32923 Dubai, United Arab Emirates</p>
                        </div>
                    </div>}
                    {!toggleTab && <div className="myOrdersPayment">
                        <div>
                            <img src={cartzMobileInvoice} alt="noImage" />
                        </div>
                        <div className="myOrdersPaymentContent">
                            <div>
                                <p>Payment Mode</p>
                                <p>Online</p>
                            </div>
                            <div>
                                <p>Total</p>
                                <p>$ 391.00</p>
                            </div>
                            <div>
                                <p>Product Discount</p>
                                <p>$ 21.40</p>
                            </div>
                            <div>
                                <p>Delivery Charges</p>
                                <p>$ 00.00</p>
                            </div>
                            <div>
                                <p>Other Charges</p>
                                <p>$ 5.00</p>
                            </div>
                            <div>
                                <p>Total Payable</p>
                                <p>$ 509.23</p>
                            </div>
                        </div>
                    </div>}
                    <div className="myOrdersRecentItems">
                        {myOrdersRecentItems.map((order, index) => {
                            return (
                                <div key={index} className="myOrdersRecentItem">
                                    <div>
                                        <p>+</p>
                                    </div>
                                    <div>
                                        <p>Order Id: {order.orderId}</p>
                                        <div>
                                            <p>{order.orderedDate}</p>
                                            <p>{order.orderedTime}</p>
                                        </div>
                                        <p>{order.orderedStatus}</p>
                                    </div>
                                    <div>
                                        <p>{order.orderPrice}</p>
                                        <div>
                                            <img src={cartzMobileMastercardS} alt="noImage" />
                                            <p>{order.orderPaymentType}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="myOrdersControls">
                        <button>BACK</button>
                        <button>NEXT</button>
                    </div>
                </div>
                <div className="myOrdersFilterPopupOverlay" style={{ display: !seeFilters ? 'none' : 'flex' }}>
                    <div className="myOrdersFiltersPopup">
                        <div className="myOrdersFiltersPopupHeader" onClick={() => toggleFilterPopup(false)}>
                            <p>Filters</p>
                        </div>
                        <div className="myOrdersFiltersPopupOptions">
                            <div className="myOrdersFiltersPopupCategories">
                                {myOrdersFiltersPopupOptions.map((option, index) => {
                                    return (
                                        <div key={index} onClick={() => filterSelectedOptions(option.title)}>
                                            <p>{option.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="myOrdersFiltersPopupSubCategories">
                                <p>{!selectedOption ? null : selectedOption}</p>
                                {selectedSubOptions && selectedSubOptions.length ? selectedSubOptions.map((option, index) => {
                                    return (
                                        <div key={index} onClick={() => setSelectedId(option.id)}>
                                            <img src={selectedId === option.id ? cartzFilterSelected : cartzFilterDeselected} alt="noImage" />
                                            <p>{option.title}</p>
                                        </div>
                                    )
                                }) : null}
                                <button>APPLY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
