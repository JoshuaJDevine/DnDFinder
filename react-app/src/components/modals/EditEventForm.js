import React from "react";

import "./EditEventForm.css"
export default function EditEventForm( {setShowModal, event}) {
    const handleClose = () => {
        setShowModal(false)
    }
    return(
        <div className="DnD__EditEventForm">
            <p>Test for event {event.id}</p>
            <button onClick={handleClose}>Close</button>
        </div>
    )
}