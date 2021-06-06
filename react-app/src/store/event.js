//=========================================================
//CONSTANTS
//=========================================================
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