import React from "react";

import "./GroupViewAdminPanel.css"
import CreateNewEventModal from "../modals/events/create event/CreateNewEventModal";
import Application from "../applications/application";
export default function GroupViewAdminPanel({groupId, applications}){
    console.log(applications)
    return(
        <div className="DnD__GroupViewAdminPanel">
            <p>ADMIN PANEL</p>
            <CreateNewEventModal groupId={groupId} />
            {applications.map((application, idx) => {
                console.log(application.status);
                if (application.status === false){
                    return(
                        <>
                            <Application applicationData={application} />
                        </>
                    )
                }

            })}
        </div>
    )
}