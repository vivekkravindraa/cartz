import React from 'react';

import cartzMobileArrowLeftBlack from '../../../assets/images/user-component-assets/cartzMobileArrowLeftBlack/cartzMobileArrowLeftBlack.png';
import cartzNotifications from '../../../assets/images/user-component-assets/cartzNotifications/cartzNotifications.png';

import { notificationsTabs } from '../../../mocks/user-component-mocks/user-mocks';

import './Notifications.scss';

export default function Notifications() {
    return (
        <div className="notificationsContainer">
            <div className="notificationsHeader">
                <img src={cartzMobileArrowLeftBlack} alt="noImage" />
                <p>Notifications</p>
            </div>
            <div className="notificationsTabs">
                {notificationsTabs.map((tabs, index) => {
                    return (
                        <div key={index}>
                            <p>{tabs.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className="notificationsList">
                <img src={cartzNotifications} alt="noImage" />
                <p>No New Notifications</p>
            </div>
        </div>
    )
}
