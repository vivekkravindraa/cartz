import React from 'react';

import googlePlay from '../../assets/images/home-component-assets/googlePlay/googlePlay.png';
import appStore from '../../assets/images/home-component-assets/appStore/appStore.png';

import mail from '../../assets/images/home-component-assets/mail/mail.svg';
import phone from '../../assets/images/home-component-assets/phone/phone.svg';
import map from '../../assets/images/home-component-assets/map/map.svg';

import facebook from '../../assets/images/home-component-assets/facebook/facebook.svg';
import instagram from '../../assets/images/home-component-assets/instagram/instagram.svg';
import linkedin from '../../assets/images/home-component-assets/linkedin/linkedin.svg';
import twitter from '../../assets/images/home-component-assets/twitter/twitter.svg';

import upArrow from '../../assets/images/home-component-assets/upArrow/upArrow.png';

import './Footer.css';

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="footerTopContent">
                <div className="footerTopLeftContent">
                    <p className="footerTitle">Get the cartz app for your mobile device</p>
                    <p className="footerSubTitle">Find best deals on Cartzs Application</p>
                    <div className="footerAppStores">
                        <img src={googlePlay} alt="noImage" height="30" />
                        <img src={appStore} alt="noImage" height="30" />
                    </div>
                </div>
            </div>
            <div className="footerBottomContent">
                <div className='footerContact'>
                    <p>CONTACT</p>
                    <div className="footerEmail">
                        <img src={mail} alt="noImage" height="24" />
                        <p>Email: admin@cartzs.com</p>
                    </div>
                    <div className="footerPhone">
                        <img src={phone} alt="noImage" height="24" />
                        <p>Call us : +971 4 3411193<br/>
                        9am to 9pm everyday</p>
                    </div>
                    <div className="footerAddress">
                        <img src={map} alt="noImage" height="24" />
                        <p>#231, 13th Cross Road, Indiranagar<br/>
                        2nd Stage Bengaluru, Karnataka</p>
                    </div>
                </div>
                <div className="footerGetToKnowUs">
                    <p>GET TO KNOW US</p>
                    <p>About Us</p>
                    <p>FAQs</p>
                    <p>News & Events</p>
                    <p>Partner with Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                    <p>Return Policy</p>
                </div>
                <div className="footerMyAccount">
                    <p>MY ACCOUNT</p>
                    <p>My Profile</p>
                    <p>Orders</p>
                    <p>My Lists</p>
                    <p>My Favourite Stores</p>
                </div>
                <div className="footerHelp">
                    <p>HELP</p>
                    <p>Payments</p>
                    <p>Shipping</p>
                    <p>Cancellation & Returns</p>
                    <p>FAQ</p>
                    <p>Report Infringement</p>
                </div>
            </div>
            <div className="footerEnd">
                <div className="footerDivider">
                    <p>Copyright 2020 cartzs. All rights reserved.</p>
                    <div className="footerSocialIcons">
                        <img src={facebook} alt="noImage" />
                        <img src={instagram} alt="noImage" />
                        <img src={linkedin} alt="noImage" />
                        <img src={twitter} alt="noImage" />
                    </div>
                    <div className="footerCurrency">
                        <p>Us Dollars</p>
                        <img src={upArrow} alt="noImage" height="12" />
                    </div>
                </div>
            </div>
        </div>
    )
}
