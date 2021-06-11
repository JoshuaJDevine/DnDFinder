import React, {useEffect, useState} from "react";

import "./Event.css"
import EditEventModal from "../modals/events/edit event/EditEventModal";
import DeleteEventModal from "../modals/events/delete event/DeleteEventModal";
export default function Event({eventData, groupId,isGroupAdmin}){
    return(
            <div className="DnD__Event">
                <p>{eventData.name}</p>
                <p>{eventData.startTime + " " + eventData.timeOfDay}</p>
                <div className="DnD__Event--buttonWrapper">
                    {isGroupAdmin ? <EditEventModal event={eventData} groupId={groupId}/> : <> </>}
                    {isGroupAdmin ? <DeleteEventModal eventId={eventData.id} groupId={groupId}>delete</DeleteEventModal> : <> </>}
                </div>
            </div>
    )
}