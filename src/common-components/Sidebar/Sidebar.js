import React from 'react';
import { sidebarItems } from './SidebarItemsJsonData';
import { customHistory } from '../../App';
import './Sidebar.scss';

export default function Sidebar() {
    return (
        <div className="sidebarContainer">
            {sidebarItems.map((sidebarItem, index) => {
                return (
                    <div key={index} className="sidebarItem" onClick={() => customHistory.push(`${sidebarItem.pathName}`)}>
                        <p>{sidebarItem.content}</p>
                        <img src={sidebarItem.imageSource} alt="noImage" />
                    </div>
                )
            })}
        </div>
    )
}
