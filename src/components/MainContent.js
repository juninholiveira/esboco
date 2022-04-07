import React from "react"
import "./MainContent.css"
import Section from "./Section"
import data from "../data.js"

function convert(time) {
    const totalHours = Math.floor(time / 3600)
    console.log("Total Hours: " + totalHours);

    const totalMinutes = Math.floor((time - (totalHours * 3600)) / 60)
    console.log("Total Minutes: " + totalMinutes);

    const totalSeconds = time % 60
    console.log("Total Seconds: " + totalSeconds);

    const aditionalHourCharacter = totalHours < 10 ? "0" : ""
    const aditionalMinuteCharacter = totalMinutes < 10 ? "0" : ""
    const aditionalSecondCharacter = totalSeconds < 10 ? "0" : ""

    return `${aditionalHourCharacter}${totalHours}:${aditionalMinuteCharacter}${totalMinutes}:${aditionalSecondCharacter}${totalSeconds}`
}

export default function MainContent () {

    let totalTime = 0

    const currentDate = new Date()
    const currentHour = currentDate.getHours()
    const currentMinute = currentDate.getMinutes()
    const currentSecond = currentDate.getSeconds()
    //console.log(`Hour: ${currentHour} - Minute: ${currentMinute} - Second: ${currentSecond}`);

    //Get all the sections on the data json and create a section component for each
    const sections = data.sections.map (x => {

        totalTime += x.time

        return (
            <Section key={x.id} {...x} />
        )
    })

    

    return (
        <div className="maincontent-container">
            <h1 className="maincontent-title">{data.title}</h1>
            <div className="maincontent-time">
                <p>Tempo Total de Discurso:</p>
                <input className="maincontent-totaltime-timepicker" type="time" value={convert(totalTime)}/>
            </div>
            <div className="maincontent-ending">
                <p>Hora de Encerramento:</p>
                <input className="maincontent-ending-timepicker" type="time"/>
            </div>
            {sections}
        </div>
    )
}