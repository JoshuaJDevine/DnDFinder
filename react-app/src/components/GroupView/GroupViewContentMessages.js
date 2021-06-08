import React, {useEffect, useState} from "react";

import "./GroupViewContentMessages.css"
import CreateNewMessageModal from "../modals/messages/CreateNewMessageModal";
import {useDispatch, useSelector} from "react-redux";
import {setGroupEventsById} from "../../store/event";
import {getGroupMessages, setGroupMessages} from "../../store/message";
export default function GroupViewContentMessages({groupData}){
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const messageData = useSelector(state => state.messageData.message);

    useEffect(async () => {
        await dispatch(getGroupMessages(groupData.id))
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
        <div className="DnD__GroupViewContentMessages">
            <p>MESSAGE CONTENT PANEL</p>
            {messageData ?
            <div className="DnD__GroupViewContentMessages--messages">
                    {messageData.map((message, idx) => {
                        return(
                            //Replace with component
                            <p>{message.text}</p>
                        )
                    })}
            </div>
            :
            <p>No Messages...</p>

            }
            <CreateNewMessageModal groupId={groupData.id}/>

        </div>
    )
}