import React, {useEffect, useState} from "react";
import "./ViewApplicationForm.css"
import {useDispatch, useSelector} from "react-redux";
import {getApplicant} from "../../../store/session";

export default function ViewApplicationForm( {applicantId, setShowModal}){
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false);
    const applicant = useSelector(state => state.session.applicant);

    useEffect(async () => {
        await dispatch(getApplicant(applicantId));
        setLoaded(true);
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
        // return await dispatch(getApplicant(applicantId))
        // .catch(async (res) => {
        //     const data = await res;
        //     if (data && data.errors){
        //         console.log("error viewing applicant " + applicantId)
        //         console.log("data was " + data)
        //         console.log("erorrs were" + data.errors)
        //     }
        // });
        console.log("Approved applicant " + applicantId)
    }

    const handleReject = async () => {
        setShowModal(false);
        // return await dispatch(getApplicant(applicantId))
        // .catch(async (res) => {
        //     const data = await res;
        //     if (data && data.errors){
        //         console.log("error viewing applicant " + applicantId)
        //         console.log("data was " + data)
        //         console.log("erorrs were" + data.errors)
        //     }
        // });
        console.log("Rejected applicant " + applicantId)
    }
    return(
        <div className="DnD__ApplicationForm">
            <p>Applicant</p>
            <div className="DnD__ApplicationForm--ButtonWrapper">
                <button onClick={handleCancel}>Close</button>
                <button onClick={handleApprove}>Approve</button>
                <button onClick={handleReject}>Reject</button>
            </div>
        </div>
    )
}