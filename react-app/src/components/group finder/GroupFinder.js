import React from "react";

import "./GroupFinder.css"
import GroupCard from "../group card/GroupCard";


export  default function GroupFinder({groupList}){


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