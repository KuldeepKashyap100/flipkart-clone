import React from "react";
import { SearchBar, HeaderOptions, FlipkartLogo } from './';


export const Header = () => {
    return (
        <div className="header-wrapper">
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
