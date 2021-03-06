import React, {useEffect} from "react";
import "./application.css"
import {getApplicant} from "../../store/session";
import {useDispatch} from "react-redux";
import ViewApplicationModal from "../modals/applications/view application/ViewApplicationModal";
export default function Application({applicationData, groupId}){
    return(
        <div className="DnD__application">
            <ViewApplicationModal applicationData={applicationData} applicantId={applicationData.userId} groupId={groupId} />
        </div>
    )
}