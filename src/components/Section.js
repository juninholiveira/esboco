import React, { useState } from "react"
import "./Section.css"
import ArrowButton from "./ArrowButton"
import SectionColorBar from "./SectionColorBar"
import SectionTopic from "./SectionTopic"

export default function Section (props) {

    //To hide or show the content of this section
    const [isSectionContentShown, setIsContentShown] = useState(true)
    function toggleSectionContent(){
        setIsContentShown(prev => !prev)
    }

    //Get all the topics inside the section props received and add a SectionTopic component for each
    const topics = props.topics.map(x => {
        return (
            <SectionTopic key={x.id} {...x} />
        )
    })

    //Checkbox clicked
    const [isCheckboxClicked, setIsCheckboxClicked] = useState(false)
    function chackboxClicked(){
        setIsCheckboxClicked(true)
        props.checkboxClicked(props.id)
    }

    return (
        <div className="section-container">

            <div className="section-title">

                <input className="section-checkbox" type="checkbox" onChange={chackboxClicked} disabled={isCheckboxClicked}></input> 

                <ArrowButton handleClick={toggleSectionContent} isActivated={isSectionContentShown} hasHiddentext="true"/>

                <h2>{props.title}</h2>

            </div>

            {isSectionContentShown && 
                <div className="section-content">
                    <SectionColorBar offsetTime={props.offsetTime}/>
                    <div className="section-topics">
                        {topics}
                    </div>
                </div>
            }

        </div>
    )
}