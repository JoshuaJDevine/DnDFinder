import React from "react";
import uuid from "react-uuid";

import "./GroupViewMembers.css"
export default function GroupViewMembers({groupMembers}){
    return(
        <div className="DnD__GroupViewMembers">
            <div>
                <h1>Group Members</h1>
            </div>
            <div className="DnD__GroupViewMembers--content">
                {groupMembers.map((member, idx) => {
                    return(
                        <p key={uuid()}>|{member.username}|</p>
                    )
                })}
            </div>

        </div>
    )
}