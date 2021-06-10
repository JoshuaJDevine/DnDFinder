import React from "react";

import "./DemoUserForm.css"
import {useDispatch} from "react-redux";
import {deleteMyGroup} from "../../../../store/group";
import {login} from "../../../../store/session";

export default function DemoUserForm( {setShowModal, setViewingGroup} ){
    const dispatch = useDispatch();
    const handleCancel = () => {
        setShowModal(false);
    }
    const handleOK = async () => {
        const data = await dispatch(login("chrisOdinson@wotc.com", "password"));
        setShowModal(false);
        setViewingGroup(-1)
        if (data.errors) {
            console.log("There were errors logging in demo user... :(")
            console.log(data.errors)
        }
    }
    return(
        <div className="DnD__DemoUserForm">
            <p>Welcome to the demo of DnD Group Finder</p>
            <p>This app is [WIP]</p>
            <div className="DnD__Button--glow">
              <div className="DnD_Button--sign fx2" onClick={handleOK}>Login</div>
              <div className="DnD_Button--sign fx1" onClick={handleCancel}>Cancel</div>
            </div>

        </div>
    )
}