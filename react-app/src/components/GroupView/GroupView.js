import React, {useEffect, useState} from "react";

import "./GroupView.css"
import {useSelector} from "react-redux";
import GroupViewHeader from "./GroupViewHeader";
import GroupViewDetails from "./GroupViewDetails";
import GroupViewAdminPanel from "./GroupViewAdminPanel";
import GroupViewContentEvents from "./GroupViewContentEvents";
import GroupViewContentMessages from "./GroupViewContentMessages";
export default function GroupView({groupData}){
    const sessionUser = useSelector(state => state.session.user);
    const [isGroupAdmin, setIsGroupAdmin] = useState(false)

    useEffect(() => {
        setIsGroupAdmin(groupData.groupAdmin === sessionUser.id)
        window.scrollTo(0, 0)
    })

    return(
        <>
        <div className="DnD__GroupView">
            <GroupViewHeader groupData={groupData} />
            <GroupViewDetails groupData={groupData} />
            {isGroupAdmin ? <GroupViewAdminPanel /> : <> </>}

        </div>
        <div className="Dnd__GroupViewContent">
            <GroupViewContentEvents groupData={groupData} />
            <GroupViewContentMessages groupData={groupData} />
        </div>
        </>
    )
}

