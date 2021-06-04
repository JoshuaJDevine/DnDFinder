import React from "react";

import "./GroupView.css"
export default function GroupView({groupData}){
    return(
        <div className="DnD__GroupView">
            <p>{groupData.name}</p>
            <p>{groupData.module}</p>

        </div>
    )
}