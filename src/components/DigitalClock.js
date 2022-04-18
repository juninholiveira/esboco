import React, { useState, useEffect } from "react"
import "./DigitalClock.css"

export default function DigitalClock() {
    const [clockState, setClockState] = useState()

    useEffect(() => {
        setInterval(() => {
            setClockState(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    return (
        <div className="digitalclock">
            <span align="left">
                {clockState}
            </span>
        </div>)
}