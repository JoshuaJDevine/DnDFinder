import React, {useState} from "react";

import "./CreateNewGroupForm.css"
import {Modal} from "../../Modal";
import CreateNewGroupForm from "./CreateNewGroupForm";

export default function CreateNewGroupModal(){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="glow-dark">
                <button onClick={() => setShowModal(true)}>New Group</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateNewGroupForm setShowModal={setShowModal}/>
                    </Modal>
                )}
            </div>

        </>
    );
}