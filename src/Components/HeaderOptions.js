import React from 'react';
import { DropDown } from '.';
import state from "../data/state.json";

export const HeaderOptions = () => {
    return (
        <div className="header-options-wrapper">
            {state.headerOptions.map((headerOption) => <DropDown label={headerOption.label} list={headerOption.list} />)}               
        </div>
    );
}