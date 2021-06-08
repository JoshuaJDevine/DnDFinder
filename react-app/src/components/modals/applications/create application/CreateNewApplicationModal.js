import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./CreateNewApplicationModal.css"
import CreateNewApplicationForm from "./CreateNewApplicationForm"
export default function CreateNewApplicationModal( {groupId}){
    const [showModal, setShowModal] = useState(false);

 return (
        <>
            <div className="glow">
                <button id="DnD__NewApplication--Button" onClick={() => setShowModal(true)}></button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <CreateNewApplicationForm setShowModal={setShowModal} groupId={groupId}/>
                    </Modal>
                )}
            </div>
        </>
    );
}