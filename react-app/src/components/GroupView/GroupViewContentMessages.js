import React from "react";

import "./GroupViewContentMessages.css"
import GroupFinder from "../group finder/GroupFinder";
export default function GroupViewContentMessages({groupData}){
    return(
        <div className="DnD__GroupViewContentMessages">
            <p>MESSAGE CONTENT PANEL</p>
            <div className="DnD__GroupViewContentMessages--messages">
                    {groupData.messages.map((message, idx) => {
                        return(
                            //Replace with component
                            <p>{message.text}</p>
                        )
                    })}
            </div>
        </div>
    )
}