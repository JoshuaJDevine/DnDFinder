import React, {useEffect, useState} from "react";
import "./ViewApplicationForm.css"
import {useDispatch, useSelector} from "react-redux";
import {getApplicant} from "../../../../store/session";
import {manageMyApplication} from "../../../../store/application";
import {getGroupMessages} from "../../../../store/message";
import {getOneGroup} from "../../../../store/group";

export default function ViewApplicationForm( {applicationData, applicantId, setShowModal, groupId}){
    const dispatch = useDispatch()
    const applicationInfo = useSelector(state => state.session.applicant)
    const [loaded, setLoaded] = useState(false);
    useEffect( () => {
        async function fetchData() {
            const data = await dispatch(getApplicant(applicantId));
            setLoaded(true);
        }
        fetchData()
    }, [])

    if (!loaded) {
        return (
            <>
                <p>Loading your content. Please wait.</p>
            </>
        );
    }


    const handleCancel = () => {
        setShowModal(false);
    }
    const handleApprove = async () => {
        setShowModal(false);
        await dispatch(manageMyApplication(1, applicationData.id ))
        .catch(async (res) => {
            const data = await res;
            if (data && data.errors){
                console.log("error viewing applicant " + applicantId)
                console.log("data was " + data)
                console.log("erorrs were" + data.errors)
            }
        });
        await dispatch(getOneGroup(groupId))

    }

    const handleReject = async () => {
        setShowModal(false);
        return await dispatch(manageMyApplication(2, applicationData.id ))
        .catch(async (res) => {
            const data = await res;
            if (data && data.errors){
                console.log("error viewing applicant " + applicantId)
                console.log("data was " + data)
                console.log("erorrs were" + data.errors)
            }
        });
    }
    return(
        <div className="DnD__ApplicationForm">
            {applicationInfo ? <p>Applicant: {applicationInfo.username}</p>: <>Loading...</>}
            {applicationData.messages.map((message, idx) => {
                return(
                    <p key={idx}>Message: {message.text}</p>
                )
            })}
            <div className="DnD__Button--glow">
                <div className="DnD_Button--sign fx1" onClick={handleApprove}>Approve</div>
                <div className="DnD_Button--sign fx1" onClick={handleReject}>Reject</div>
                <div className="DnD_Button--sign fx2" onClick={handleCancel}>Close</div>
            </div>
        </div>
    )
}