import React, {useState} from "react";

import "./EditGroupModal.css"
import {Modal} from "./Modal";
import EditGroupForm from "./EditGroupForm";

export default function EditGroupModal({group}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id={"DnD__DeleteGroupForm--EditButton"} onClick={() => setShowModal(true)}></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditGroupForm setShowModal={setShowModal} group={group}/>
                </Modal>
            )}
        </>
    );
}