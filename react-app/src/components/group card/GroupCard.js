import React, {useState} from "react";
import {useSelector} from "react-redux";

import "./GroupCard.css"
import DeleteGroupModal from "../modals/DeleteGroupModal";
import EditGroupModal from "../modals/EditGroupModal";
import {Modal} from "../modals/Modal";
import ViewGroupDetails from "../modals/ViewGroupDetails";
import ViewGroupDetailsModal from "../modals/ViewGroupDetailsModal";

export default function GroupCard({data, setViewingGroup}){
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);
    return(

        <div className="DnD__GroupCard">
            <h1>{data.module}</h1>
            <h2>{data.name}</h2>
            <img src="https://i.imgur.com/THuQZ8L.png"/>
            <h3>{data.dayOfWeek}</h3>
            <h4>{data.startTime + " - " + data.endTime + " " + data.timeOfDay + " " + data.timeZone}</h4>
            <h5>{"Party size: " + data.maxPartySize}</h5>
            {sessionUser.id === data.groupAdmin ?
                <>
                    <div className="DnD__GroupCard--Buttons">
                        <EditGroupModal group={data} />
                        <DeleteGroupModal groupId={data.id} />
                        <ViewGroupDetailsModal group={data} setViewingGroup={setViewingGroup}/>
                    </div>
                </>
                :
                <>
                    <div className="DnD__GroupCard--Buttons">
                        <ViewGroupDetailsModal group={data} setViewingGroup={setViewingGroup}/>
                    </div>
                </>
            }
        </div>


    )
}