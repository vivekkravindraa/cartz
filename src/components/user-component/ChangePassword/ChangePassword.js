import React from 'react';
import { useWindowSize } from '../../../utils/useWindowSize';

import Header from '../../../common-components/Header/Header';
import Sidebar from '../../../common-components/Sidebar/Sidebar';
import cartzMobileLockPassword from '../../../assets/images/user-component-assets/cartzMobileLockPassword/cartzMobileLockPassword.png';

import './ChangePassword.scss';

export default function ChangePassword() {
    const size = useWindowSize();

    return (
        <React.Fragment>
            {size.width >= 992 ? <Header /> : null}
            <div className="changePasswordContainer">
                {size.width >= 992 ? <div>
                    <Sidebar />
                </div> : null }
                <div className="changePasswordContent">
                    <p>Change Password</p>
                    <div className="changePasswordOld">
                        <img src={cartzMobileLockPassword} alt="noImage" />
                        <input type="text" placeholder="Old Password" />
                    </div>
                    <div className="changePasswordNew">
                        <img src={cartzMobileLockPassword} alt="noImage" />
                        <input type="text" placeholder="New Password" />
                    </div>
                    <div className="changePasswordConfirm">
                        <img src={cartzMobileLockPassword} alt="noImage" />
                        <input type="text" placeholder="Confirm New Password" />
                    </div>
                    <button>SEND OTP</button>
                </div>
            </div>
        </React.Fragment>
    )
}
