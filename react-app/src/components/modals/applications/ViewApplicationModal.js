import React, {useState} from "react";
import {Modal} from "../Modal";

import "./ViewApplicationModal.css"
import ViewApplicationForm from "./ViewApplicationForm"

export default function ViewApplicationModal( {applicantId} ){
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="glow">
                <button onClick={() => setShowModal(true)}>view application {applicantId}</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ViewApplicationForm applicantId={applicantId} setShowModal={setShowModal}/>
                    </Modal>
                )}
            </div>
        </>
    );
}