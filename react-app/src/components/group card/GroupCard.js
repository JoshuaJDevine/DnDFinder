import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import "./GroupCard.css"
import DeleteGroupModal from "../modals/groups/delete group/DeleteGroupModal";
import EditGroupModal from "../modals/groups/edit group/EditGroupModal";
import {Modal} from "../modals/Modal";
import ViewGroupDetails from "../modals/groups/view group/ViewGroupDetails";
import ViewGroupDetailsModal from "../modals/groups/view group/ViewGroupDetailsModal";
import CreateNewApplicationModal from "../modals/applications/create application/CreateNewApplicationModal";

export default function GroupCard({data, setViewingGroup, myIdx}){
    const [showModal, setShowModal] = useState(false);


    const [userHasApplied, setUserHasApplied] = useState(false)
    const sessionUser = useSelector(state => state.session.user);
    useEffect(() => {
        data.applications.map((application, idx) => {
            if (application.userId === sessionUser.id){
                setUserHasApplied(true)
            }
        })
    }, [])

    const handleDoubleClick = function (data, setViewingGroup) {
        setViewingGroup(myIdx)
    }




    return(

        <div className="DnD__GroupCard" onDoubleClick={(e) => {handleDoubleClick(data, setViewingGroup)}}>
            <h1>{data.name}</h1>
            <h2>{data.module}</h2>
            <img src="https://i.imgur.com/THuQZ8L.png"/>
            <h3>{data.dayOfWeek}</h3>
            <h4>{data.startTime + " - " + data.endTime + " " + data.timeOfDay + " " + data.timeZone}</h4>
            <h5>{"Party size: " + data.maxPartySize}</h5>
            {sessionUser.id === data.groupAdmin ?
                <>
                    <div className="DnD__GroupCard--Buttons">
                        <EditGroupModal group={data} />
                        <DeleteGroupModal groupId={data.id} />
                        <ViewGroupDetailsModal group={data} setViewingGroup={setViewingGroup} myIdx={myIdx}/>
                    </div>
                </>
                :
                <>
                    <div className="DnD__GroupCard--Buttons">
                        <ViewGroupDetailsModal group={data} setViewingGroup={setViewingGroup} myIdx={myIdx}/>
                        {sessionUser.id !== data.groupAdmin && userHasApplied !== true ?
                            <CreateNewApplicationModal groupId={data.id} setUserHasApplied={setUserHasApplied} />
                            :
                            <>
                            </>
                        }
                    </div>
                </>
            }
        </div>


    )
}