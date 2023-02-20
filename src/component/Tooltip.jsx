import React, { useState } from "react";

const Tooltip = (props) => {
    const [active, setActive] = useState(false);

    return (
        <div className="relative" onMouseEnter={()=> setActive(true)} onMouseLeave={()=> setActive(false)}>{props.children}{active && (
            <div className={`Tooltip-Tip ${props.direction}`}>
                {props.content}
            </div>
        )}
        </div>
    );
};

export default Tooltip;
