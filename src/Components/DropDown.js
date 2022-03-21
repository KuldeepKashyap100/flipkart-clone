import { useState } from "react";

const DropDown = ({label, list}) => {
    const [mouseOverFlag, setMouseOverFlag] = useState(true);
    return (
        <div className="dropdown-wrapper">
            <div className="dropdown-label" onMouseOver={() => setMouseOverFlag(true)} onMouseOut={() => setMouseOverFlag(false)}>
                {label}
            </div>
            <div className={`dropdown-list ${mouseOverFlag ? "visible": ""}`}>
                <ul>
                    {list.map(listItem => <li>{listItem}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default DropDown;