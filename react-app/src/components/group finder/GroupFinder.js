import React from "react";

import "./GroupFinder.css"
import GroupCard from "../group card/GroupCard";


export  default function GroupFinder({groupList}){
    groupList = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },

    ];

    return (
    <div className="DnD__GroupFinder">
      {groupList.map((group) => (
        <GroupCard data={group} />
      ))}
    </div>
    );
}