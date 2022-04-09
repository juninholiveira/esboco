import React, { useState } from "react"
import "./MainContent.css"
import Section from "./Section"
import data from "../data.js"

export default function MainContent () {

    const [endingTime, setEndingTime] = useState("")

    //Create an Array of each sections time to pass to each section component for time calculations
    let arrayOfSectionsTime = []
    data.sections.forEach(element => {
        arrayOfSectionsTime.push(element.time)
    });

    //Get all the sections on the data json and create a section component for each
    const sectionsElements = data.sections.map (x => {
        //Add all section times to find the totalTime
        return (
            <Section key={x.id} {...x} arrayOfSectionsTime={arrayOfSectionsTime} endingTime={endingTime}/>
        )
    })

    return (
        <div className="maincontent-container">
            <h1 className="maincontent-title">{data.title}</h1>
            <div className="maincontent-ending">
                <p>Hora de Encerramento (HH/MM/SS):</p>
                <input className="maincontent-ending-timepicker" type="time" step="1" onChange={e => setEndingTime(e.target.value)} value={endingTime}/>
            </div>
            {sectionsElements}
        </div>
    )
}