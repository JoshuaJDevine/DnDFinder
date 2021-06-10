import React from "react";

import "./GroupViewAdminPanel.css"
import CreateNewEventModal from "../modals/events/create event/CreateNewEventModal";
import Application from "../applications/application";
import uuid from "react-uuid";
export default function GroupViewAdminPanel({groupId, applications}){
    return(
        <div className="DnD__GroupViewAdminPanel">
            <p>ADMIN PANEL</p>
            <CreateNewEventModal groupId={groupId} />
            {applications.map((application, idx) => {
                if (application.status === false){
                    return(
                        <>
                            <Application key={uuid()} applicationData={application} groupId={groupId} />
                        </>
                    )
                }
                else {
                    return <div key={uuid()}></div>
                }

            })}
        </div>
    )
}