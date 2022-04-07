import React from "react";
import Arrow from "../img/arrow.png"
import "./ArrowButton.css"

export default function ArrowButton (props) {

    const styles = {
        transform: props.isActivated ? "rotate(90deg)" : "rotate(0deg)",
        visibility: props.hasHiddentext ? "visible" : "hidden"
    }

    return (
        <button 
            onClick={props.handleClick} 
            className="topic-arrow"
            style={styles}
        >
            <img src={Arrow} alt="arrow"></img>
        </button>
    )
}