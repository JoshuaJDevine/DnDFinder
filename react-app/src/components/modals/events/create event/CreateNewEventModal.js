import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./CreateNewEventModal.css"
import CreateNewGroupForm from "../../groups/create group/CreateNewGroupForm";
import CreateNewEventForm from "./CreateNewEventForm";
export default function CreateNewEventModal(){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="glow">
                <button onClick={() => setShowModal(true)}>New Event</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateNewEventForm setShowModal={setShowModal}/>
                    </Modal>
                )}
            </div>

        </>
    );
}