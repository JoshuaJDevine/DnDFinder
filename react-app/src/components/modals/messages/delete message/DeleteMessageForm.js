import React from "react";
import "./DeleteMessageForm.css"
import {useDispatch} from "react-redux";
import {deleteMyMessage} from "../../../../store/message";

export default function DeleteMessageForm({messageId, setShowModal, group_id}){
    const dispatch = useDispatch();
    const handleCancel = () => {
        setShowModal(false);
    }
    const handleOK = async () => {
        setShowModal(false);
        return await dispatch(deleteMyMessage(messageId, group_id))
        .catch(async (res) => {
            const data = await res;
            if (data && data.errors){
                console.log("error deleting event " + messageId)
                console.log("data was " + data)
                console.log("erorrs were" + data.errors)
            }
        });
    }
    return (
        <div className="DnD__DeleteMessageForm">
            <p>Are you sure you want to delete your message {messageId}?</p>
            <p>This cannot be undone.</p>
            <div className="DnD__DeleteMessageForm--ButtonWrapper">
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleOK}>Delete</button>
            </div>

        </div>
    )
}