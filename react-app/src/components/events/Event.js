import React from "react";

import "./Event.css"
import EditEventModal from "../modals/EditEventModal";
export default function Event({eventData}){
    return(
        <div className="DnD__Event">
            <p>{eventData.name}</p>
            <p>{eventData.startTime + " " + eventData.timeOfDay}</p>
            <div className="DnD__Event--buttons">
                <EditEventModal event={eventData}/>
            </div>
        </div>
    )
}