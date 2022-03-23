import { useState } from "react";

export const DropDown = ({label, list}) => {
    const [mouseOverFlag, setMouseOverFlag] = useState(false);
    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-label" onMouseOver={() => setMouseOverFlag(true)} onMouseOut={() => setMouseOverFlag(false)}>
                {label}
                <div class="label-icon"></div>
            </div>
            <div className={`dropdown-list ${mouseOverFlag ? "visible": ""}`}>
                <div class="triangle-icon"></div>
                <ul>
                    {list.map((listItem, listItemIdx) => <li key={listItemIdx}>{listItem}</li>)}
                </ul>
            </div>
        </div>
    );
}