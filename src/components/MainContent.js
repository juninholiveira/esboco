import React from "react"
import "./MainContent.css"
import Section from "./Section"
import data from "../data.js"
import { convertSecondsToTimeObject } from "../utils"

export default function MainContent () {

    let totalTime = 0

    //Get all the sections on the data json and create a section component for each
    const sections = data.sections.map (x => {
        //Add all section times to find the totalTime
        totalTime += x.time
        return (
            <Section key={x.id} {...x} />
        )
    })

    const totalTimeObj = convertSecondsToTimeObject(totalTime)


    return (
        <div className="maincontent-container">
            <h1 className="maincontent-title">{data.title}</h1>
            <div className="maincontent-time">
                <input type="radio" name="timeType" id="radioTimeType1" checked/>
                <p>Tempo Total de Discurso (HH/MM/SS):</p>
                <input className="maincontent-totaltime-timepicker" type="time" step="1" readOnly={true} value={`${totalTimeObj.hours}:${totalTimeObj.minutes}:${totalTimeObj.seconds}`}/>
            </div>
            <div className="maincontent-ending">
                <input type="radio" name="timeType" id="radioTimeType2"/>
                <p>Hora de Encerramento (HH/MM/SS):</p>
                <input className="maincontent-ending-timepicker" type="time" step="1"/>
            </div>
            {sections}
        </div>
    )
}