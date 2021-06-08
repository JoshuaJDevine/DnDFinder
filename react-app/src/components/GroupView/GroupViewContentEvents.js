import React, {useEffect, useState} from "react";

import "./GroupViewContentEvents.css"
import Event from "../events/Event";
import {setGroupEvents} from "../../store/event";
import {useDispatch, useSelector} from "react-redux";

export default function GroupViewContentEvents({groupData}){
    const dispatch = useDispatch();

    const [loaded, setLoaded] = useState(false);
    const eventData = useSelector(state => state.eventData.event);

    useEffect(() => {
        dispatch(setGroupEvents(groupData.events))
        setLoaded(true);
    }, [eventData])

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
                            <Event eventData={event} />
                        )
                    })}
            </div>
            :
            <p>Fetching your events...</p>
            }
        </div>
    )
}