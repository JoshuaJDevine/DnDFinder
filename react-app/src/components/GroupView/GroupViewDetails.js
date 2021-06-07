import React from "react";

import "./GroupViewDetails.css"
export default function GroupViewDetails({groupData}){
    return(
        <div className="DnD__GroupViewDetails">
            <h1>What we're about</h1>
            <p>{groupData.details}</p>
        </div>
    )
}