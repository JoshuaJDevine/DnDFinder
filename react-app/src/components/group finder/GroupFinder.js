import React, {useState} from "react";

import "./GroupFinder.css"
import GroupCard from "../group card/GroupCard";
import uuid from 'react-uuid'


export default function GroupFinder({groupList, myIdx, single, setViewingGroup}){
    return (
    <div className="DnD__GroupFinder">
        {groupList.map((group, idx) => {
            if (idx % 2 !== 0 && myIdx+1 === idx) {
                return(
                    <>
                    <GroupCard key={uuid()} data={groupList[idx-1]} setViewingGroup={setViewingGroup} />
                    <GroupCard key={uuid()} data={groupList[idx]} setViewingGroup={setViewingGroup} />
                    </>
                )
            }
            else if (groupList.length % 2 !== 0 && idx+1 === groupList.length && single){
                return(
                    <GroupCard key={uuid()} data={groupList[idx]} setViewingGroup={setViewingGroup}/>
                )
            }
            else {
                return null
            }
        })}
    </div>
    );
}