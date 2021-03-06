import React from "react";
import "./DeleteGroupForm.css"
import {useDispatch} from "react-redux";
import {deleteMyGroup} from "../../../../store/group";

export default function DeleteGroupForm( {setShowModal, groupId} ){
    const dispatch = useDispatch();
    const handleCancel = () => {
        setShowModal(false);
    }
    const handleOK = async () => {
        setShowModal(false);
        return await dispatch(deleteMyGroup(groupId))
        .catch(async (res) => {
            const data = await res;
            if (data && data.errors){
                console.log("error deleting group " + groupId)
                console.log("data was " + data)
                console.log("erorrs were" + data.errors)
            }
        });
    }

    return (
        <div className="DnD__DeleteGroupForm">
            <p>Are you sure you want to delete you group?</p>
            <p>This cannot be undone.</p>
            <div className="DnD__Button--glow">
                <div className="DnD_Button--sign fx1" onClick={handleOK}>Delete</div>
                <div className="DnD_Button--sign fx2" onClick={handleCancel}>Cancel</div>
            </div>

        </div>
    )
}