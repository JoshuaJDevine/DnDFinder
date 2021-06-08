import React, {useState} from "react";

import "../../groups/create group/CreateNewGroupForm.css"
import {Modal} from "../../Modal";
import DemoUserForm from "./DemoUserForm";

import "../../groups/delete group/DeleteGroupModal.css"
export default function DemoUserModal(){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="glow">
                <button onClick={() => setShowModal(true)}>Demo</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DemoUserForm setShowModal={setShowModal}/>
                    </Modal>
                )}
            </div>

        </>
    );
}