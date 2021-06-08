import React, {useState} from "react";

import "./UpdateMessageModal.css"
import {Modal} from "../../Modal";
import UpdateMessageForm from "./UpdateMessageForm"
import EditEventForm from "../../events/edit event/EditEventForm";

export default function UpdateMessageModal({message, groupId}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="glow" onClick={() => setShowModal(true)}>Edit Message {message.id}</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <UpdateMessageForm setShowModal={setShowModal} message={message} groupId={groupId}/>
                </Modal>
            )}
        </>
    );
}