import React from "react";

import "./GroupCard.css"

export default function GroupCard({data}){
    return(
        <div className="DnD__GroupCard">
            <p>{data.name}</p>
        </div>
    )
}