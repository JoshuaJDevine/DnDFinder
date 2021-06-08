import React, {useEffect, useState} from "react";

import "./GroupViewContentEvents.css"
import Event from "../events/Event";
import {setGroupEventsById} from "../../store/event";
import {useDispatch, useSelector} from "react-redux";

export default function GroupViewContentEvents({groupData, isGroupAdmin}){
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false);
    const eventData = useSelector(state => state.eventData.event);


    useEffect(async () => {
        await dispatch(setGroupEventsById(groupData.id))
        setLoaded(true);
    }, [])



    if (!loaded) {
        return (
            <>
                <p>Loading events</p>
            </>
        );
    }

    return(
        <div className="GroupViewContentEvents">
            <p>EVENTS CONTENT PANEL</p>
            {eventData ?
            <div className="DnD__GroupViewContentMessages--events">
                    {eventData.map((event, idx) => {
                        return(
                            <Event eventData={event} groupId={groupData.id} isGroupAdmin={isGroupAdmin} />
                        )
                    })}
            </div>
            :
            <p>No events...</p>
            }
        </div>
    )
}