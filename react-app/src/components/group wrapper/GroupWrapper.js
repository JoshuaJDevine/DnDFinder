import React from "react";
import GroupFinder from "../group finder/GroupFinder";

import "./GroupWrapper.css"
export default function GroupWrapper(){
    const groupList = [
        { id: 1, name: "Friendly Campaign", module: "Mines of Phandelver", day:"Monday", time: "7-12PM PDT", members:3 },
        { id: 2, name: "Dungeon of loot", module: "Ebberon", day:"Saturday", time: "1-3PM EST ", members:3 },
    ];

    return (
        <div className="Dnd__GroupWrapper" >
                <GroupFinder groupList={groupList}/>
                <GroupFinder groupList={groupList}/>
                <GroupFinder groupList={groupList}/>
        </div>
    )
}