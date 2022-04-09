import React, { useState } from "react"
import "./MainContent.css"
import Section from "./Section"
import data from "../data.js"
import { getCurrentTimeSeconds, convertTimeStringToSeconds } from "../utils"

export default function MainContent () {

    const [sections, setSections] = useState(data.sections)

    const [endingTime, setEndingTime] = useState("")
    const [offsetTime, setOffsetTime] = useState(0)
    function calculateOffsetTime(currentSectionId){
        // A - get expected endtime
        let expectedEndTime = convertTimeStringToSeconds(endingTime)
        //console.log(`Expected Ending Time: ${expectedEndTime}`);

        // B - get current time
        let currentTime = getCurrentTimeSeconds()
        //console.log(`Current Time: ${currentTime}`);

        // C - get the amount of time expected to remain (add all left secions)
        let timeShouldLeft = 0
        for (var i = (currentSectionId - 1); i < data.sections.length; i++) {
            timeShouldLeft += data.sections[currentSectionId].time
        }
        //console.log(`Time Should Left: ${timeShouldLeft}`);
        
        // D - subtract (A - B)
        let timeReallyLeft = expectedEndTime - currentTime
        //console.log(`Time Really Left: ${timeReallyLeft}`);

        // E - compare this result with C (D - C)
        setOffsetTime(timeReallyLeft - timeShouldLeft)

        setSections(prev => prev)

        //The E is the offset of time (for more or for less) and should be transformed in a number between -2 and 2 to change the color of SectionColorBar
    }


    //let totalTime = 0

    //Get all the sections on the data json and create a section component for each
    const sectionsElements = sections.map (x => {
        //Add all section times to find the totalTime
        //totalTime += x.time
        return (
            <Section key={x.id} {...x} checkboxClicked={calculateOffsetTime} offsetTime={offsetTime}/>
        )
    })

    //const totalTimeObj = convertSecondsToTimeObject(totalTime)
    //convertTimeObjectToSeconds(totalTimeObj)


    return (
        <div className="maincontent-container">
            <h1 className="maincontent-title">{data.title}</h1>
            {/* <div className="maincontent-time">
                <input type="radio" name="timeType" id="radioTimeType1" checked/>
                <p>Tempo Total de Discurso (HH/MM/SS):</p>
                <input className="maincontent-totaltime-timepicker" type="time" step="1" readOnly={true} value={`${totalTimeObj.hours}:${totalTimeObj.minutes}:${totalTimeObj.seconds}`}/>
            </div> */}
            <div className="maincontent-ending">
                {/* <input type="radio" name="timeType" id="radioTimeType2"/> */}
                <p>Hora de Encerramento (HH/MM/SS):</p>
                <input className="maincontent-ending-timepicker" type="time" step="1" onChange={e => setEndingTime(e.target.value)}/>
            </div>
            {sectionsElements}
        </div>
    )
}