import React from "react";

import "./GroupViewAdminPanel.css"
import CreateNewEventModal from "../modals/events/create event/CreateNewEventModal";
export default function GroupViewAdminPanel(){
    return(
        <div className="DnD__GroupViewAdminPanel">
            <p>ADMIN PANEL</p>
            <CreateNewEventModal />
        </div>
    )
}