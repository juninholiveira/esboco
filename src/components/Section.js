import React, { useState } from "react"
import "./Section.css"
import SectionContent from "./SectionContent"
import ArrowButton from "./ArrowButton"
import StartingCheckbox from "./StartingCheckbox"


export default function Section (props) {

    const [isSectionContentShown, setIsContentShown] = useState(true)

    function toggleSectionContent(){
        setIsContentShown(prev => !prev)
    }

    return (
        <div className="section-container">
            <div className="section-title">
                <StartingCheckbox />
                <ArrowButton handleClick={toggleSectionContent} isActivated={isSectionContentShown} hasHiddentext="true"/>
                <h2>{props.title}</h2>
            </div>
            {isSectionContentShown && <SectionContent {...props}/>}
        </div>
    )
}