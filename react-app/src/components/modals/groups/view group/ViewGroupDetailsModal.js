import React, {useState} from "react";

import "./ViewGroupDetailsModal.css"
import {Modal} from "../../Modal";
import ViewGroupDetails from "./ViewGroupDetails";

export default function ViewGroupDetailsModal({group, setViewingGroup, myIdx}){
    const [showModal, setShowModal] = useState(false);
    console.log(myIdx)
    return (
        <>
            <div className="glow">
                <button id="DnD__DeleteGroupForm--ViewButton" onClick={() => setShowModal(true)}></button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ViewGroupDetails setShowModal={setShowModal} data={group} setViewingGroup={setViewingGroup} myIdx={myIdx}/>
                    </Modal>
                )}
            </div>

        </>
    );
}