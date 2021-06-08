import React, {useEffect} from "react";
import "./application.css"
import {getApplicant} from "../../store/session";
import {useDispatch} from "react-redux";
export default function Application({applicationData}){

    //Use this in the modal to get the applicant data
    // const dispatch = useDispatch()
    // console.log(applicationData)
    //
    // useEffect(async () => {
    //     await dispatch(getApplicant(applicationData.userId));
    // }, [])

    return(
        <div className="DnD__application">
            <p>{applicationData.userId} has applied with a status of {applicationData.status.toString()}</p>
        </div>
    )
}