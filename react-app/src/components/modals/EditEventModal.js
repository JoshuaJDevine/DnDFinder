import React, {useState} from "react";

import "./EditEventModal.css"
import {Modal} from "./Modal";
import EditEventForm from "./EditEventForm";

export default function EditEventModal({event}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="DnD__EditEventForm--EditButton" onClick={() => setShowModal(true)}>EDIT</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditEventForm setShowModal={setShowModal} event={event}/>
                </Modal>
            )}
        </>
    );
}