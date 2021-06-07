import React, {useState} from "react";

import "./GroupView.css"
import {useSelector} from "react-redux";
import GroupViewHeader from "./GroupViewHeader";
export default function GroupView({groupData}){

    return(
        <div className="DnD__GroupView">
            <GroupViewHeader groupData={groupData}/>
        </div>
    )
}

