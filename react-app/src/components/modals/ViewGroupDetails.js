import React from "react";

import "./ViewGroupDetails.css"

export default function ViewGroupDetails({setShowModal, data}){

    const handleClose = () => {
        setShowModal(false)
    }
    const handleViewGroup = () => {
        setShowModal(false)
        console.log("Dispatch Events!")
    }

    return(
        <div className="DnD__ViewGroupDetails">
            <p>{data.name}</p>
            <p>{data.details}</p>
            <p>{data.where}</p>
            <p>{data.module}</p>
            <p>{data.dayOfWeek}</p>
            <p>{data.startTime}</p>
            <p>{data.endTime}</p>
            <p>{data.timeOfDay}</p>
            <p>{data.maxPartySize}</p>
            <p>{data.groupAdmin}</p>
            <p>{data.timeZone}</p>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleViewGroup}>Visit Group</button>
        </div>
    )
}