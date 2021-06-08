import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./CreateNewMessageModal.css"
import CreateNewMessageForm from "./CreateNewMessageForm";
export default function CreateNewMessageModal( {groupId}){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div className="glow">
                <button onClick={() => setShowModal(true)}>New Message</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateNewMessageForm setShowModal={setShowModal} groupId={groupId}/>
                    </Modal>
                )}
            </div>
        </>
    )
}