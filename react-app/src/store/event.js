//=========================================================
//CONSTANTS
//=========================================================
import {getAllApplications} from "./application";

const GET_EVENTS = "session/GET_EVENTS"
const GET_EVENT = "session/GET_EVENT"
const CREATE_EVENT = "session/CREATE_EVENT"
const UPDATE_EVENT = "session/UPDATE_EVENT"
const DELETE_EVENT = "session/DELETE_EVENT"

const getEvents = (events) => ({
    type: GET_EVENTS,
    payload: events
});

const getEvent = (event) => ({
    type: GET_EVENT,
    payload: event
});

const createEvent = (event) => ({
    type: CREATE_EVENT,
    payload: event
});

const updateEvent = (event) => ({
    type: UPDATE_EVENT,
    payload: event
})

const deleteEvent = (event) => ({
    type: DELETE_EVENT,
    payload: event
})

export const getAllEvents = () => async (dispatch)  => {
    const response = await fetch('/api/events/',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
    if (data.errors) {
        return;
    }

    dispatch(getEvents(data))
}

export const getOneEvent = id => async (dispatch) => {
    const res = await fetch(`/api/events/${id}`);
    const data = await res.json();

    dispatch(getEvent(data));
}

export const setGroupEvents = events =>  async (dispatch) => {
    dispatch(getEvent(events));
}



export const createNewEvent = (name,
                               location,
                               dayOfWeek,
                               startTime,
                               endTime,
                               timeOfDay,
                               notes,
                               group_id
                               ) => async (dispatch)  => {
    const response = await fetch("/api/events/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                name,
               location,
               dayOfWeek,
               startTime,
               endTime,
               timeOfDay,
               notes,
               group_id
            }),
        });
        const data = await response.json();
        if (data.errors) {
            console.log("==================================================")
            console.log("==================================================")
            console.log("==================================================")
            console.log("==================================================")
            console.log("//TODO Handle with UI")
            console.log("Received the following errors");
            console.log(data.errors);
            return data.errors;
         }
    dispatch(getAllEvents())
    return {};
}



export const deleteMyEvent = (id) => async (dispatch) => {
    const response = await fetch(`/api/events/${id}/`, {
        method: "DELETE"
    });
    if (response.ok) {
        await dispatch(deleteEvent(id));
        await dispatch(getAllEvents())
        return response;
    }
    else {
        console.log("Error deleting application" + id)
    }
}


export const updateMyEvent =  (id,
                               name,
                               location,
                               dayOfWeek,
                               startTime,
                               endTime,
                               timeOfDay,
                               notes,
                               group_id
                               ) => async (dispatch)  => {
    const response = await fetch(`/api/events/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                               name,
                               location,
                               dayOfWeek,
                               startTime,
                               endTime,
                               timeOfDay,
                               notes,
                               group_id
            }),
        });
        const data = await response.json();
        if (data.errors) {
            console.log("Received the following errors");
            console.log(data.errors);
            return data.errors;
         }
    await dispatch(getAllEvents())
    return {};
}




//=========================================================
//REDUCER
//=========================================================
const initialState = { events: null };

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return {events: action.payload}
        case GET_EVENT:
            return {event: action.payload}
        case CREATE_EVENT:
            return {event: action.payload}
        case UPDATE_EVENT:
            return {event: action.payload}
        case DELETE_EVENT:
            return {event: null}
        default:
            return state;
    }
}