import React, { useState } from "react";
import "./accordeon.css";

function Accordeon({title, content}) {
    const [active, setActive] = useState(false);

    const handleToggle = (e) => {
        setActive(!active)
    }

    return (
        <div className={`accordeon ${active && "active"}`}>
            <div className="accordeon__title" onClick={handleToggle}>
                {title} <span className="accordeon__icon"></span>
            </div>
            <div className="accordeon__content">{content}</div>
        </div>
    )
}

export default Accordeon;