import React from "react";
import {createNewMessage} from "../../../store/message";
import {useDispatch, useSelector} from "react-redux";

import "./CreateNewMessageForm.css"
export default function CreateNewMessageForm(){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const handleClose = () => {
        setShowModal(false)
    }


    return(
        <div className="DnD__CreateNewMessageForm">
            <p>Create New Message Form</p>
        </div>
    )
}