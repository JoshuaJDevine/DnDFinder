import React from "react";

import "./application.css"
export default function Application({applicationData}){
    return(
        <div className="DnD__application">{applicationData.userID} has applied with a status of {applicationData.status}</div>
    )
}