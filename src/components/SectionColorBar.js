import React from "react"
import "./SectionColorBar.css"

export default function SectionColorBar (props) {

    let color

    if(props.offsetTime >= 120)
        color = "#ff00c3"
    else if(props.offsetTime < 120 && props.offsetTime >= 30)
        color = "#0dff00"
    else if(props.offsetTime < 30 && props.offsetTime >= -30)
        color = "#ffffff"
    else if(props.offsetTime < -30 && props.offsetTime >= -120)
        color = "#ffd500"
    else if(props.offsetTime < -120)
        color = "#ff0000"
    else
        color = "#525252"

    return (
        <>
            <div className="section-colorbar">
                <div className="bar" style={{ backgroundColor: color }}></div>
            </div>
        </>
    )
}
