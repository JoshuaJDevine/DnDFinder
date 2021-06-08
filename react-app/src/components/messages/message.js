import React from "react";

import "./message.css"
import UpdateMessageModal from "../modals/messages/update message/UpdateMessageModal";
import DeleteMessageModal from "../modals/messages/delete message/DeleteMessageModal";
export default function Message({message, group_id, isOwner}){
    return(
        <div className="DnD__Message">
            <p>{message.text}</p>
            {isOwner ?
            <div className="DnD__Message--buttonWrapper">
                <UpdateMessageModal groupId={group_id} message={message} />
                <DeleteMessageModal messageId={message.id} groupId={group_id}  />
            </div>
            :
            <>
            </>
            }
        </div>
    )
}