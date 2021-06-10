import React from "react";
import "./DeleteEventForm.css"
import {useDispatch} from "react-redux";
import {deleteMyEvent} from "../../../../store/event";

export default function DeleteEventForm( {eventId, setShowModal, group_id } ){
    const dispatch = useDispatch();
    const handleCancel = () => {
        setShowModal(false);
    }
    const handleOK = async () => {
        setShowModal(false);
        return await dispatch(deleteMyEvent(eventId, group_id))
        .catch(async (res) => {
            const data = await res;
            if (data && data.errors){
                console.log("error deleting event " + eventId)
                console.log("data was " + data)
                console.log("erorrs were" + data.errors)
            }
        });
    }

    return (
        <div className="DnD__DeleteEventForm">
            <p>Are you sure you want to delete your event?</p>
            <p>This cannot be undone.</p>
            <div className="DnD__Button--glow">
                <div className="DnD_Button--sign fx1" onClick={handleOK}>Delete</div>
                <div className="DnD_Button--sign fx2" onClick={handleCancel}>Cancel</div>
            </div>
        </div>
    )
}