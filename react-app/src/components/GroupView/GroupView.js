import React, {useEffect, useState} from "react";

import "./GroupView.css"
import {useDispatch, useSelector} from "react-redux";
import GroupViewHeader from "./GroupViewHeader";
import GroupViewDetails from "./GroupViewDetails";
import GroupViewAdminPanel from "./GroupViewAdminPanel";
import GroupViewContentEvents from "./GroupViewContentEvents";
import GroupViewContentMessages from "./GroupViewContentMessages";
import {setGroupEvents} from "../../store/event";
export default function GroupView({groupData}){
    const sessionUser = useSelector(state => state.session.user);
    const [isGroupAdmin, setIsGroupAdmin] = useState(false)

    useEffect(async () => {
        setIsGroupAdmin(groupData.groupAdmin === sessionUser.id)
        window.scrollTo(0, 0)
    })

    return(
        <>
        <div className="DnD__GroupView">
            <GroupViewHeader groupData={groupData} />
            <GroupViewDetails groupData={groupData} />
            {isGroupAdmin ? <GroupViewAdminPanel groupId={groupData.id} /> : <> </>}

        </div>
        <div className="Dnd__GroupViewContent">
            <GroupViewContentEvents groupData={groupData} isGroupAdmin={isGroupAdmin} />
            <GroupViewContentMessages groupData={groupData} />
        </div>
        </>
    )
}

