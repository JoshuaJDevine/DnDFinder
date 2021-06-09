import React, {useEffect, useState} from "react";
import "./ViewApplicationForm.css"
import {useDispatch, useSelector} from "react-redux";
import {getApplicant} from "../../../../store/session";
import {manageMyApplication} from "../../../../store/application";
import {getGroupMessages} from "../../../../store/message";

export default function ViewApplicationForm( {applicationData, applicantId, setShowModal}){
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);
    console.log(applicationData)
    useEffect( () => {
        async function fetchData() {
            await dispatch(getApplicant(applicantId));
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
        return await dispatch(manageMyApplication(1, applicationData.id ))
        .catch(async (res) => {
            const data = await res;
            if (data && data.errors){
                console.log("error viewing applicant " + applicantId)
                console.log("data was " + data)
                console.log("erorrs were" + data.errors)
            }
        });
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
            <p>Applicant</p>
            {applicationData.messages.map((message, idx) => {
                return(
                    <p key={idx}>{message.text}</p>
                )
            })}
            <div className="DnD__ApplicationForm--ButtonWrapper">
                <button onClick={handleCancel}>Close</button>
                <button onClick={handleApprove}>Approve</button>
                <button onClick={handleReject}>Reject</button>
            </div>
        </div>
    )
}