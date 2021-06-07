import React from "react";

import "./GroupViewContentEvents.css"
import Event from "../events/Event";
export default function GroupViewContentEvents({groupData}){
    return(
        <div className="GroupViewContentEvents">
            <p>EVENTS CONTENT PANEL</p>
            <div className="DnD__GroupViewContentMessages--events">
                    {groupData.events.map((event, idx) => {
                        return(
                            <Event eventData={event} />
                        )
                    })}
            </div>
        </div>
    )
}