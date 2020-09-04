import React from 'react';
import { useWindowSize } from '../../utils/useWindowSize';

import Header from '../../common-components/Header/Header';
import Sidebar from '../../common-components/Sidebar/Sidebar';
import Profile from './Profile/Profile';

export default function UserComponent() {
    const size = useWindowSize();

    return (
        <div className="userContainer">
            {size.width >= 992 ?
                <React.Fragment>
                    <Header />
                    <div className="userContent" style={{
                        'display': 'grid',
                        'gridTemplateColumns': '2fr 10fr',
                        'columnGap': '25px',
                        'margin': '40px'
                    }}>
                        <Sidebar />
                        <Profile />
                    </div>
                </React.Fragment>
            :
                <React.Fragment>
                    <Profile />
                </React.Fragment>
            }
        </div>
    )
}
