import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./CreateNewEventModal.css"
import CreateNewEventForm from "./CreateNewEventForm";
export default function CreateNewEventModal( {groupId}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="glow">
                <button onClick={() => setShowModal(true)}>New Event</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateNewEventForm setShowModal={setShowModal} groupId={groupId}/>
                    </Modal>
                )}
            </div>
        </>
    );
}