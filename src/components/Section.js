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
    const [offsetTime, setOffsetTime] = useState(0)
    function calculateOffsetTime(){

        setIsCheckboxClicked(true)

        // A - get expected endtime
        let expectedEndTime = convertDateToSeconds(props.endingTime)

        // B - get current time
        let currentTime = convertDateToSeconds(new Date())

        // C - get the amount of time expected to remain (add all left secions)
        let timeShouldLeft = 0
        for (var i = (props.id); i < props.arrayOfSectionsTime.length; i++) {
            timeShouldLeft += props.arrayOfSectionsTime[i]
        }
        
        // D - subtract (A - B)
        let timeReallyLeft = expectedEndTime - currentTime

        // E - compare this result with C (D - C)
        //The E is the offset of time (for more or for less) and should be passed to SectionColorBar to change the color
        setOffsetTime(timeReallyLeft - timeShouldLeft)
    }

    //Utility function to convert a Date object in seconds (of the current day)
    function convertDateToSeconds(date) {
        return ((date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds())
    }

    const totalSpeechTime = props.arrayOfSectionsTime.reduce(
        ( acumulador, valorAtual ) => acumulador + valorAtual * 1000,
        0)

    let sumOfPreviousSections = 0
    for(let i = 0; i < props.arrayOfSectionsTime.length; i++) {
        if(i < props.id) {
            sumOfPreviousSections += props.arrayOfSectionsTime[i] * 1000
        }
    }

    const hour = new Date(props.endingTime - totalSpeechTime + sumOfPreviousSections).getHours().toLocaleString("pt-BR", {minimumIntegerDigits: 2, useGrouping:false})
    const minute = new Date(props.endingTime - totalSpeechTime + sumOfPreviousSections).getMinutes().toLocaleString("pt-BR", {minimumIntegerDigits: 2, useGrouping:false})
    const second = new Date(props.endingTime - totalSpeechTime + sumOfPreviousSections).getSeconds().toLocaleString("pt-BR", {minimumIntegerDigits: 2, useGrouping:false})
      

    const timeToStart =         
            "(" +
            //props.endingTime - tempo total do discurso + soma do tempo das se????es anteriores (atual n??o)
            hour + 
            ":" +
            minute +
            ":" +
            second + 
            ")"

    return (
        <div className="section-container">
            <div className="section-title">
                <input className="section-checkbox" name="section-checkbox" type="checkbox" onChange={calculateOffsetTime} checked={isCheckboxClicked} disabled={isCheckboxClicked}></input> 
                <ArrowButton handleClick={toggleSectionContent} isActivated={isSectionContentShown} hasHiddentext="true"/>
                <h2>{props.title} {timeToStart}</h2>
            </div>
            {isSectionContentShown && 
                <div className="section-content">
                    <SectionColorBar offsetTime={offsetTime}/>
                    <div className="section-topics">
                        {topics}
                    </div>
                </div>
            }
        </div>
    )
}