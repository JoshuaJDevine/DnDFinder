import React from "react";

import "./GroupFinder.css"
import GroupCard from "../group card/GroupCard";


export  default function GroupFinder({groupList}){
    groupList = [
        { id: 1, name: "Friendly Campaign", module: "Mines of Phandelver", day:"Monday", time: "7-12PM PDT", members:3 },
        { id: 2, name: "Dungeon of loot", module: "Ebberon", day:"Saturday", time: "1-3PM EST ", members:3 },
    ];

    console.log(groupList)

    return (
    <div className="DnD__GroupFinder">
        {groupList.map((group, idx) => {
              return(
                  <GroupCard key={idx} data={group} />
              )
        })
    }
    </div>
    );
}