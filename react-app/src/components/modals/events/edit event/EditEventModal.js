import React, {useState} from "react";

import "./EditEventModal.css"
import {Modal} from "../../Modal";
import EditEventForm from "./EditEventForm";

export default function EditEventModal({event, groupId}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="glow-dark">
            <button onClick={() => setShowModal(true)}>Edit</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                    <EditEventForm setShowModal={setShowModal} event={event} groupId={groupId}/>
                    </Modal>
                )}
            </div>

        </>
    );
}