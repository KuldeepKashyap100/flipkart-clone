import React from 'react';
import { DropDown } from '.';

const HeaderOptions = () => {
    return (
        <div className="header-options-wrapper">
            <DropDown label="Kuldeep" list={["My Profile", "Orders"]} />
            <DropDown label="More" list={["Notification Preferences", "Sell On Flipkart"]} />
               
        </div>
    );
}

export default HeaderOptions;