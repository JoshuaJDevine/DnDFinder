import React from "react";

import "./GroupFinder.css"
import GroupCard from "../group card/GroupCard";


export default function GroupFinder({groupList, myIdx, single, setViewingGroup}){
    return (
    <div className="DnD__GroupFinder">
        {groupList.map((group, idx) => {
            if (idx % 2 !== 0 && myIdx+1 === idx) {
                return(
                    <>
                    <GroupCard key={idx} data={groupList[idx-1]} setViewingGroup={setViewingGroup} />
                    <GroupCard key={idx+12} data={groupList[idx]} setViewingGroup={setViewingGroup} />
                    </>
                )
            }
            else if (groupList.length % 2 !== 0 && idx+1 === groupList.length && single){
                return(
                    <GroupCard key={idx+200} data={groupList[idx]} setViewingGroup={setViewingGroup} />
                )
            }
        })}
    </div>
    );
}