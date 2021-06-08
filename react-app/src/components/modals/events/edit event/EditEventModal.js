import React, {useState} from "react";

import "./EditEventModal.css"
import {Modal} from "../../Modal";
import EditEventForm from "./EditEventForm";

export default function EditEventModal({event, groupId}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="glow" onClick={() => setShowModal(true)}>EDIT EVENT {event.id}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditEventForm setShowModal={setShowModal} event={event} groupId={groupId}/>
                </Modal>
            )}
        </>
    );
}