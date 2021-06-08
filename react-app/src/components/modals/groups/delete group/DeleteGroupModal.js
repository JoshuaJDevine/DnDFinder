import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./DeleteGroupModal.css"
import DeleteGroupForm from "./DeleteGroupForm";

export default function CreateNewGroupModal( {groupId} ){
    const [showModal, setShowModal] = useState(false);

    //---------------------------------------------------------
    //---------------------------------------------------------
    //Since this is a child of DnD__GroupCard the style will be in GroupCard.css
    return (
        <>
            <button id="DnD__DeleteGroupForm--DeleteButton" onClick={() => setShowModal(true)}></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteGroupForm groupId={groupId} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}