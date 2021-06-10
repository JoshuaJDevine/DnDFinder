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
            <p>Are you sure you want to delete your message?</p>
            <p>This cannot be undone.</p>
            <div className="DnD__Button--glow">
                <div className="DnD_Button--sign fx1" onClick={handleOK}>Delete</div>
                <div className="DnD_Button--sign fx2" onClick={handleCancel}>Cancel</div>
            </div>

        </div>
    )
}