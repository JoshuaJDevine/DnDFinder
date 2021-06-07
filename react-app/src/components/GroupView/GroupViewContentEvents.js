import React from "react";

import "./GroupViewContentEvents.css"
export default function GroupViewContentEvents({groupData}){
    return(
        <div className="GroupViewContentEvents">
            <p>EVENTS CONTENT PANEL</p>
            <div className="DnD__GroupViewContentMessages--messages">
                    {groupData.events.map((event, idx) => {
                        return(
                            //Replace with component
                            <p>{event.name}</p>
                        )
                    })}
            </div>
        </div>
    )
}