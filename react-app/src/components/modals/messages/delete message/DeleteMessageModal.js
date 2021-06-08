import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./DeleteMessageModal.css"
import DeleteMessageForm from "./DeleteMessageForm";

export default function DeleteMessageModal ( {messageId, groupId} ) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button id="DnD__DeleteEventModal--DeleteButton" onClick={() => setShowModal(true)}>DELETE</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteMessageForm messageId={messageId} setShowModal={setShowModal} group_id={groupId}/>
                </Modal>
            )}
        </>
    );
}