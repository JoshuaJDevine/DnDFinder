import React from "react";

import "./Event.css"
export default function Event({eventData}){
    return(
        <div className="DnD__Event">
            <p>{eventData.name}</p>
            <p>{eventData.startTime + " " + eventData.timeOfDay}</p>
            <div className="DnD__Event--buttons">
                <p>Test</p>
            </div>
        </div>
    )
}