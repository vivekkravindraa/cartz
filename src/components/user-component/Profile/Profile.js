import React, { useState } from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import womenInGreyS from '../../../assets/images/fashion-component-assets/womenInGrey/womenInGreyS.png';
import pencilRed from '../../../assets/images/user-component-assets/pencilRed/pencilRed.svg';
import frontArrow from '../../../assets/images/home-component-assets/frontArrow/frontArrow.png';
import backArrow from '../../../assets/images/home-component-assets/backArrow/backArrow.png';
import profile from '../../../assets/images/user-component-assets/profile/profile.png';

import cartzMobileMap from '../../../assets/images/user-component-assets/cartzMobileMap/cartzMobileMap.svg';
import cartzMobileDownArrow from '../../../assets/images/user-component-assets/cartzMobileDownArrow/cartzMobileDownArrow.png';
import cartzMobileRightArrow from '../../../assets/images/user-component-assets/cartzMobileRightArrow/cartzMobileRightArrow.png';
import cartzMobileGoogle from '../../../assets/images/user-component-assets/cartzMobileGoogle/cartzMobileGoogle.png';
import cartzMobileFacebook from '../../../assets/images/user-component-assets/cartzMobileFacebook/cartzMobileFacebook.png';
import cartzMobileMale from '../../../assets/images/user-component-assets/cartzMobileMale/cartzMobileMale.png';
import cartzMobileFemale from '../../../assets/images/user-component-assets/cartzMobileFemale/cartzMobileFemale.png';

import { profileLinks, profileOptions, profileAbout } from '../../../mocks/user-component-mocks/user-mocks';

import { customHistory } from '../../../App';

import './Profile.scss';

export default function Profile() {
    const size = useWindowSize();
    const [ isMobile, setIsMobile ] = useState(false);
    const [ changeMode, setChangeMode ] = useState(false);
    const [ editMode, setEditMode ] = useState(false);
    const [ name, setName ] = useState('Rahul Roy');
    const [ mobileNumber, setMobileNumber ] = useState('+91 9735647488');
    const [ gender, setGender ] = useState('Men');
    const [ dateOfBirth, setDOB ] = useState('17 Apr 1997 (23 Years)');
    const [ email, setEmail ] = useState('rahulroy@gmail.com');
    const [ aboutId, setAboutId ] = useState(0);
    const [ editName, setEditName ] = useState(false);
    const [ editMobileNumber, setEditMobileNumber ] = useState(false);
    const [ editDOB, setEditDOB ] = useState(false);
    const [ editEmail, setEditEmail ] = useState(false);

    const handleAboutId = (id) => {
        if(id !== aboutId) {
            setAboutId(id);
        } else {
            setAboutId(0);
        }
    }

    const handleModes = () => {
        if(!editMode) {
            setEditMode(true);
            size.width >= 992 ? setIsMobile(false) : setIsMobile(true);
        } else {
            setEditMode(false);
        }
    }

    return !isMobile ? <div className="profileContainer">
            <div className="profileDetails">
                <div className="profileLocation">
                    <div>
                        <img src={backArrow} alt="noImage" />
                    </div>
                    <div>
                        <img src={cartzMobileMap} alt="noImage" />
                        <p>Fresno, USA</p>
                    </div>
                </div>
                <div className="profileUser">
                    <div className="profileUserImage">
                        <img src={womenInGreyS} alt="noImage" />
                    </div>
                    <div className="profileUserName">
                        {
                            editMode && size.width >= 992 ?
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            :
                            <p>{name}</p>
                        }
                        {
                            editMode && size.width >= 992 ?
                            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                            :
                            <p>{mobileNumber}</p>
                        }
                    </div>
                    <div className="profileUserEdit" onClick={() => handleModes()}>
                        <img src={pencilRed} alt="noImage" />
                        <p>Edit</p>
                    </div>
                </div>
                <div className="profileUserData">
                    <div className="profileEmail">
                        <label>Email</label>
                        {!changeMode ? <p>{email}</p> : <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />}
                        <p onClick={() => !changeMode ? setChangeMode(true) : setChangeMode(false)}><img src={pencilRed} alt="noImage" />Change</p>
                    </div>
                    <div className="profileCountry">
                        <label>Country</label>
                        <select>
                            <option>United States</option>
                            <option>United Arab Emirates</option>
                            <option>United Kingdom</option>
                        </select>
                        <React.Fragment></React.Fragment>
                    </div>
                    <div className="profileLanguage">
                        <label>Language</label>
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Kannada</option>
                        </select>
                    </div>
                    <div className="profileGender">
                        <label>Gender</label>
                        <select>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="profileDateOfBirth">
                        <label>Date Of Birth</label>
                        <input type="date" />
                    </div>
                </div>
                <div className="profileControls">
                    <button>DISCARD</button>
                    <button>SAVE</button>
                </div>
            </div>
            <div className="profileMobileData">
                <div className="profileLinks">
                    {profileLinks.map((link, index) => {
                        return <div key={index} onClick={() => customHistory.push(`${link.pathName}`)}>
                            <span><img src={link.src} alt="noImage" /></span>
                            <p>{link.label}</p>
                        </div>
                    })}
                </div>
                <div className="profileOptions">
                    {profileOptions.map((option, index) => {
                        return <div key={index}>
                            <p>{option.label}</p>
                            <img src={option.src} alt="noImage" />
                        </div>
                    })}
                </div>
                <div className="profileAbout">
                    {profileAbout.map((about, index) => {
                        return <div key={index} onClick={() => handleAboutId(about.id)}>
                            <p>{about.label}</p>
                            {       
                                aboutId === about.id
                                ?   <img src={cartzMobileDownArrow} alt="noImage" height="16px" />
                                :   <img src={cartzMobileRightArrow} alt="noImage" height="16px" />
                            }
                        </div>
                    })}
                </div>
            </div>
            <div className="profileImage" style={{ backgroundImage: `url(${profile})` }}>
                <button>Refer & Earn<img src={frontArrow} alt="noImage" /></button>
            </div>
        </div>
        : <div className="profileContainer">
            <div className="profileHeader">
                <div className="profileTitle">
                    <img src={backArrow} alt='noImage' onClick={() => {
                        setIsMobile(false);
                        setEditMode(false);
                    }} />
                    <p>Profile</p>
                </div>
                <div className="profileImage">
                    <img src={womenInGreyS} alt="noImage" />
                </div>
                <div className="profileLinks">
                    <div className="profileGoogleLink">
                        <img src={cartzMobileGoogle} alt="noImage" />
                        <p>Link Google</p>
                    </div>
                    <div className="profileFacebookLink">
                        <img src={cartzMobileFacebook} alt="noImage" />
                        <p>Link Facebook</p>
                    </div>
                </div>
            </div>
            <div className="profileUserDataMobile">
                <div className="profileName">
                    <p>NAME</p>
                    <div className="profileNameInput">
                        {
                            !editName
                            ? 
                                <React.Fragment>
                                    <p>{name}</p>
                                    <p onClick={() => setEditName(true)}><img src={pencilRed} alt="noImage" />Edit</p>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                    <p onClick={() => setEditName(false)}>UPDATE</p>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div className="profileGender">
                    <p>GENDER</p>
                    <div className="profileGenderInput">
                        <p>{gender}</p>
                        <div>
                            <img src={cartzMobileMale} alt="noImage" onClick={() => setGender('Men')} />
                            <img src={cartzMobileFemale} alt="noImage" onClick={() => setGender('Women')} />
                        </div>
                    </div>
                </div>
                <div className="profileDateOfBirth">
                    <p>DATE OF BIRTHDAY</p>
                    <div>
                        {
                            !editDOB ?
                                <React.Fragment>
                                    <p>{dateOfBirth}</p>
                                    <p onClick={() => setEditDOB(true)}><img src={pencilRed} alt="noImage" />Edit</p>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    <input type="date" onChange={(e) => setDOB(e.target.value)} />
                                    <p onClick={() => setEditDOB(false)}>UPDATE</p>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div className="profilePhoneNumber">
                    <p>PHONE NUMBER</p>
                    <div>
                        {
                            !editMobileNumber ?
                                <React.Fragment>
                                    <p>{mobileNumber}</p>
                                    <p onClick={() => setEditMobileNumber(true)}><img src={pencilRed} alt="noImage" />Edit</p>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                                    <p onClick={() => setEditMobileNumber(false)}>UPDATE</p>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div className="profileEmail">
                    <p>EMAIL</p>
                    <div>
                        {
                            !editEmail ?
                                <React.Fragment>
                                    <p>{email}</p>
                                    <p onClick={() => setEditEmail(true)}><img src={pencilRed} alt="noImage" />Edit</p>
                                </React.Fragment>
                            :
                                <React.Fragment>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <p onClick={() => setEditEmail(false)}>UPDATE</p>
                                </React.Fragment>
                        }
                    </div>
                </div>
            </div>
            <div className="profileControls">
                <button>DISCARD</button>
                <button>SAVE</button>
            </div>
        </div>
}
