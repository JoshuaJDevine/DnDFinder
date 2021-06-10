import React, {useState} from "react";
import {Modal} from "../../Modal";

import "./ViewApplicationModal.css"
import ViewApplicationForm from "./ViewApplicationForm"

export default function ViewApplicationModal( {applicationData, applicantId, groupId} ){
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <div className="glow-admin">
                <button onClick={() => setShowModal(true)}>View New Application</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ViewApplicationForm applicationData={applicationData} applicantId={applicantId} setShowModal={setShowModal} groupId={groupId}/>
                    </Modal>
                )}
            </div>
        </>
    );
}