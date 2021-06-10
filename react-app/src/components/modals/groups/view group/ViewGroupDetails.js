import React from "react";

import "./ViewGroupDetails.css"

export default function ViewGroupDetails({setShowModal, data, setViewingGroup, myIdx}){

    const handleClose = () => {
        setShowModal(false)
    }
    const handleViewGroup = () => {
        setShowModal(false)
        console.log("setting viewing group to " + myIdx)
        setViewingGroup(myIdx)
    }

    return(
        <>
        <div className="DnD__ViewGroupDetails">
            <div className="DnD__ViewGroupDetails--ButtonGroup">
                <p>{data.name}: {data.module}</p>
            </div>
            <div className="DnD__ViewGroupDetails--ButtonGroup">
                <p>{data.details}</p>
            </div>
            <div className="DnD__ViewGroupDetails--ButtonGroup">
                <p>{data.where}</p>
            </div>
            <div className="DnD__ViewGroupDetails--ButtonGroup">
                <p>{data.dayOfWeek} {data.startTime} - {data.endTime} {data.timeOfDay} {data.timeZone}</p>
            </div>
            <div className="DnD__Button--glow">
                <div className="DnD_Button--sign fx1" onClick={handleClose}>Close</div>
                <div className="DnD_Button--sign fx2" onClick={handleViewGroup}>Visit Group</div>
            </div>
        </div>
        </>
    )
}