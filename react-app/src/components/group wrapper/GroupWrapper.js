import React from "react";
import GroupFinder from "../group finder/GroupFinder";

import "./GroupWrapper.css"
export default function GroupWrapper(){
    const groupList = [
        { id: 1, name: "The salt Marsh" },
        { id: 2, name: "Victor Wayne" },
    ];

    return (
        <div className="Dnd__GroupWrapper" >
                <GroupFinder groupList={groupList}/>
                <GroupFinder groupList={groupList}/>
                <GroupFinder groupList={groupList}/>
        </div>
    )
}