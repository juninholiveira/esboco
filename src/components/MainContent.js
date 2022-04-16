import React, { useState } from "react"
import "./MainContent.css"
import Section from "./Section"
import { createEsbocoObject } from "../markdownManager.js"

export default function MainContent () {

    const [endingTime, setEndingTime] = useState("")
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
            <div className="maincontent-header">
                <h1 className="maincontent-title">{fileObject.title}</h1>
                <div className="maincontent-ending">
                    <p>Hora de Encerramento (HH/MM/SS):</p>
                    <input className="maincontent-ending-timepicker" type="time" step="1" onChange={e => setEndingTime(e.target.value)} value={endingTime}/>
                </div>
                <input className="maincontent-fileinput" type="file" accept=".md,.txt" onChange={handleFileLoaded}/>
            </div>
            {sectionsElements}
        </div>
    )
}