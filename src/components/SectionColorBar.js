import React from "react"
import "./SectionColorBar.css"

export default function SectionColorBar (props) {

    let color
    switch(props.offsetTime){
        case -2:
            color = "#ff0000"
            break
        case -1:
            color = "#ffd500"
            break
        case 0:
            color = "#ffffff"
            break
        case 1:
            color = "#0dff00"
            break
        case 2:
            color = "#ff00c3"
            break
        default:
            color = "#ffffff"
    }
    const styles = { backgroundColor: color }

    return (
        <>
            <div className="section-colorbar">
                <div className="bar" style={styles}></div>
            </div>
        </>
    )
}