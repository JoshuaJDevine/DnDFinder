import React, {useEffect} from "react";
import "./application.css"
import {getApplicant} from "../../store/session";
import {useDispatch} from "react-redux";
import ViewApplicationModal from "../modals/applications/view application/ViewApplicationModal";
export default function Application({applicationData}){
    return(
        <div className="DnD__application">
            <ViewApplicationModal applicantId={applicationData.userId} />
        </div>
    )
}