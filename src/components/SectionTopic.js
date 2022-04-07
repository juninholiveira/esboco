import React, { useState } from "react"
import "./SectionTopic.css"
import ArrowButton from "./ArrowButton"

export default function SectionTopic (props) {

    const [isHiddenTextShown, setIsHiddenTextShown] = useState(false)

    const hasHiddentext = props.hiddentext !== "" ? true : false

    //Styles conditioning
    const tabSize = (60 * (props.level - 1)) + "px"
    const mainTextColor = props.type === "topic" ? "#579AFF" : "#ff7b00"
    const hiddenTextColor = props.type === "topic" ? "white" : "#ff7b00"

    function toggleHiddenText(){
        setIsHiddenTextShown(prev => !prev)
    }
    
    return (
        <div className="section-topic" style={{ paddingLeft : tabSize }}>
            <div>
                <ArrowButton handleClick={toggleHiddenText} isActivated={isHiddenTextShown} hasHiddentext={hasHiddentext}/>
            </div>
            <div className="topic-text">
                <h3
                    className="topic-maintext"
                    style={{ color : mainTextColor }}
                >
                    {props.quote && <span className="topic-quote">CITAR </span>}
                    {props.maintext}
                </h3>
                {isHiddenTextShown && <p className="topic-hiddentext" style={{ color : hiddenTextColor }}>{props.hiddentext}</p>}
            </div>
        </div>
    )
}