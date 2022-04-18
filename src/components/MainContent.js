import React, { useState } from "react"
import "./MainContent.css"
import Section from "./Section"
import DigitalClock from "./DigitalClock"
import { createEsbocoObject } from "../markdownManager.js"

import { TimeInput } from '@mantine/dates'
import { Clock } from 'tabler-icons-react';

export default function MainContent () {

    const [endingTime, setEndingTime] = useState(new Date().setSeconds(0))
    const [fileObject, setFileObject] = useState("")

    //Create an Array of each sections time to pass to each section component for time calculations
    let arrayOfSectionsTime = []
    if(fileObject){
        fileObject.sections.forEach(element => {
            arrayOfSectionsTime.push(element.time)
        })
    }

    //Get all the sections on the data json and create a section component for each
    let sectionsElements = []
    if(fileObject){
        sectionsElements = fileObject.sections.map (x => {
            //Add all section times to find the totalTime
            return (
                <Section key={x.id} {...x} arrayOfSectionsTime={arrayOfSectionsTime} endingTime={endingTime}/>
            )
        })
    }

    function handleFileLoaded(e) {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.readAsText(file)

        reader.onload = () => {
            const fileString = reader.result
            setFileObject(createEsbocoObject(fileString))
        }
        reader.onerror = () => {
            console.log("File load error: " + reader.error);
        }
    }

    return (
        <div className="maincontent-container">
            {fileObject === "" && <div className="maincontent-form">
                <div className="maincontent-ending">
                    <TimeInput label="Hora de Encerramento" classNames={{root: "maincontent-ending-root", label: "maincontent-ending-label"}} icon={<Clock size={16}/>} onChange={setEndingTime} value={endingTime}/>
                </div>
                <input id="fileinput" className="maincontent-fileinput" type="file" accept=".md,.txt" onChange={handleFileLoaded}/>
                <label htmlFor="fileinput" className="maincontent-fileinput-label">Selecionar Discurso</label> 
            </div>}
            {fileObject !== "" && <DigitalClock className="digitalclock"/>}
            <h1 className="maincontent-title">{fileObject.title}</h1>
            {sectionsElements}
        </div>
    )
}