import React from "react";
import {useSelector} from "react-redux";

import "./GroupCard.css"
import DeleteGroupModal from "../modals/DeleteGroupModal";
import EditGroupModal from "../modals/EditGroupModal";

export default function GroupCard({data}){
    const sessionUser = useSelector(state => state.session.user);
    return(

        <div className="DnD__GroupCard">
            {sessionUser.id === data.groupAdmin ?
                <>
                    <DeleteGroupModal groupId={data.id} />
                    <EditGroupModal group={data} />
                </>
                :
                <>
                </>
            }
            <h1>{data.name}</h1>
            <h2>{data.module}</h2>
            <img src="https://i.imgur.com/THuQZ8L.png"/>
            <h3>{data.dayOfWeek}</h3>
            <h4>{data.startTime + " - " + data.endTime + " " + data.timeOfDay + " " + data.timeZone}</h4>
            <h5>{"Party size: " + data.maxPartySize}</h5>
        </div>


    )
}