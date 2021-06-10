import React from "react";

import "./GroupViewAdminPanel.css"
import CreateNewEventModal from "../modals/events/create event/CreateNewEventModal";
import Application from "../applications/application";
import uuid from "react-uuid";
export default function GroupViewAdminPanel({groupId, applications}){
    return(
        <div className="DnD__GroupViewAdminPanel">
            <div className="DnD__GroupViewAdminPanel--header">
                <h1>ADMIN PANEL</h1>
            </div>
            <div className="DnD__GroupViewAdminPanel--content">
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
                        return null
                    }

                })}
            </div>
        </div>
    )
}