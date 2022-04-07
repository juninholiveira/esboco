import React from "react"
import "./SectionContent.css"
import SectionColorBar from "./SectionColorBar"
import SectionTopic from "./SectionTopic"

export default function SectionContent (props) {

    //Get all the topics inside the section props received and add a SectionTopic component for each
    const topics = props.topics.map(x => {
        return (
            <SectionTopic key={x.id} {...x} />
        )
    })

    return (
        <div className="section-content">
            <SectionColorBar />
            <div className="section-topics">
                {topics}
            </div>
        </div>
    )
}