import React from "react";

import "./DemoUserForm.css"
import {useDispatch} from "react-redux";
import {deleteMyGroup} from "../../../../store/group";
import {login} from "../../../../store/session";

export default function DemoUserForm( {setShowModal} ){
    const dispatch = useDispatch();
    const handleCancel = () => {
        setShowModal(false);
    }
    const handleOK = async () => {
        const data = await dispatch(login("chrisOdinson@wotc.com", "password"));
        setShowModal(false);
        if (data.errors) {
            console.log("There were errors logging in demo user... :(")
            console.log(data.errors)
        }
    }
    return(
        <div className="DnD__DemoUserForm">
            <p>Welcome</p>
            <p>This app is a work in progress</p>
            <p>The Demo user can create groups, delete groups and edit groups</p>
            <button onClick={handleCancel}>No!</button>
            <button onClick={handleOK}>OK!</button>
        </div>
    )
}