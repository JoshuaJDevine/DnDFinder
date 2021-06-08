import React from "react";

import "./UpdateMessageForm.css"
export default function UpdateMessageForm({setShowModal, message, groupId}) {
    return(
        <div className="DnD_UpdateMessageModal">
            <p>Edit Message ${message.text}</p>
        </div>
    )
}