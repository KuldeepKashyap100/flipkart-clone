import React from "react";
import FlipkartLogo from "./FlipkartLogo";
import { SearchBar, HeaderOptions } from './';


const Header = () => {
    return (
        <div class="header-wrapper">
            <div style={{width: "124px", height: "100%"}}></div>
            <div className="header">
                <FlipkartLogo />
                <SearchBar />
                <HeaderOptions />
            </div>
            <div style={{width: "124px", height: "100%"}}></div>
        </div>
    );
}

export default Header;