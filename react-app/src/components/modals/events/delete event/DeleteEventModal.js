import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./DeleteEventModal.css"
import DeleteEventForm from "./DeleteEventForm";

export default function DeleteEventModal( {eventId, groupId} ){
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="glow-dark">
                <button id="DnD__DeleteEventModal--DeleteButton" onClick={() => setShowModal(true)}>Delete</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DeleteEventForm eventId={eventId} setShowModal={setShowModal} group_id={groupId}/>
                    </Modal>
                )}
            </div>

        </>
    );
}