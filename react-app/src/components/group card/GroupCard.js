import React from "react";

import "./GroupCard.css"

export default function GroupCard({data}){
    return(

        <div className="DnD__GroupCard">
            <h1>{data.name}</h1>
            <h2>{data.module}</h2>
            <img src="https://i.imgur.com/THuQZ8L.png"/>
            <h3>{data.dayOfWeek}</h3>
            <h4>{data.startTime + " - " + data.endTime + " " + data.timeOfDay + " " + data.timeZone}</h4>
            <h5>{"Party size: " + data.maxPartySize}</h5>
        </div>


    )
}