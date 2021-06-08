import React from "react";

export default function GroupViewMembers({groupMembers}){
    return(
        <div className="DnD__GroupViewMembers">
            {groupMembers.map((member, idx) => {
                return(
                    <p>user {member.username} is a member</p>
                )
            })}
        </div>
    )
}