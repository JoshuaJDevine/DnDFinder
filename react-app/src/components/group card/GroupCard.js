import React from "react";

import "./GroupCard.css"

export default function GroupCard({data}){
    return(

        <div className="DnD__GroupCard">
            <h1>{data.name}</h1>
            <h2>{data.module}</h2>
            <img src="https://i.imgur.com/THuQZ8L.png"/>
            <h3>{data.day}</h3>
            <h4>{data.time}</h4>
            <h5>{"Party size: " + data.members}</h5>
        </div>


    )
}