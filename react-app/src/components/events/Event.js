import React from "react";

import "./Event.css"
export default function Event({eventData}){
    return(
        <div className="DnD__Event">
            <p>{eventData.name}</p>
            <p>{eventData.time}</p>
        </div>
    )
}