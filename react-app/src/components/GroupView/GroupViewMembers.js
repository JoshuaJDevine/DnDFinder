import React from "react";
import uuid from "react-uuid";

export default function GroupViewMembers({groupMembers}){
    return(
        <div className="DnD__GroupViewMembers">
            {groupMembers.map((member, idx) => {
                return(
                    <p key={uuid()}>user {member.username} is a member</p>
                )
            })}
        </div>
    )
}