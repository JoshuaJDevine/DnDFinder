import React, {useEffect, useState} from "react";

import "./GroupViewContentMessages.css"
import CreateNewMessageModal from "../modals/messages/create message/CreateNewMessageModal";
import {useDispatch, useSelector} from "react-redux";
import {getGroupMessages} from "../../store/message";
import Message from "../messages/message";
export default function GroupViewContentMessages({groupData}){
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const messageData = useSelector(state => state.messageData.message);


    useEffect( () => {
        async function fetchData() {
            await dispatch(getGroupMessages(groupData.id))
            setLoaded(true);
        }
        fetchData();
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
            <h1>MESSAGE CONTENT PANEL</h1>
            <CreateNewMessageModal groupId={groupData.id}/>
            {messageData ?
            <div className="DnD__GroupViewContentMessages--messages">
                    {messageData.map((message, idx) => {
                        return(
                            <Message key={idx} message={message} group_id={groupData.id} isOwner={message.sender_id === sessionUser.id} />
                        )
                    })}
            </div>
            :
            <p>No Messages...</p>
            }

        </div>
    )
}