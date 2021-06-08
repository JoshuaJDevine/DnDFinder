//=========================================================
//CONSTANTS
//=========================================================
import {setGroupEvents} from "./event";

const GET_MESSAGES = "session/GET_MESSAGES"
const GET_MESSAGE = "session/GET_MESSAGE"
const CREATE_MESSAGE = "session/CREATE_MESSAGE"
const UPDATE_MESSAGE = "session/UPDATE_MESSAGE"
const DELETE_MESSAGE = "session/DELETE_MESSAGE"

const getMessages = (messages) => ({
    type: GET_MESSAGES,
    payload: messages
});

const getMessage = (message) => ({
    type: GET_MESSAGE,
    payload: message
});

const createMessage = (message) => ({
    type: CREATE_MESSAGE,
    payload: message
});

const updateMessage = (message) => ({
    type: UPDATE_MESSAGE,
    payload: message
})

const deleteMessage = (message) => ({
    type: DELETE_MESSAGE,
    payload: message
})

export const getAllMessages = () => async (dispatch)  => {
    const response = await fetch('/api/messages/',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response)
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(getMessages(data))
}

export const getOneMessage = id => async (dispatch) => {
    const res = await fetch(`/api/messages/${id}`);
    const data = await res.json();

    dispatch(getMessage(data));
}

export const getGroupMessages = groupId => async (dispatch) => {
    let res = await fetch(`/api/groups/${groupId}`);
    let data = await res.json();
    console.log(data)
    for (let key in data){
        if (key === "messages"){
            dispatch(setGroupMessages(data[key]))
        }
    }
}
export const setGroupMessages = messages => async (dispatch) => {
     dispatch(getMessage(messages));
}

export const createNewMessage = (text,
                                sender_id,
                                group_id,
                                event_id,
                                user_id,
                                application_id,
                               ) => async (dispatch)  => {
    const response = await fetch("/api/messages/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
            sender_id,
            group_id,
            event_id,
            user_id,
            application_id,
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
    await dispatch(getGroupMessages(group_id))
    return {};
}


export const deleteMyMessage = (id) => async (dispatch) => {
    const response = await fetch(`/api/messages/${id}/`, {
        method: "DELETE"
    });
    if (response.ok) {
        await dispatch(deleteMessage(id));
        await dispatch(getAllMessages())
        return response;
    }
    else {
        console.log("Error deleting message" + id)
    }
}


export const updateMyMessage =  (id,
                                text,
                                sender_id,
                                group_id,
                                event_id,
                                user_id,
                                application_id,
                               ) => async (dispatch)  => {
    const response = await fetch(`/api/messages/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
            sender_id,
            group_id,
            event_id,
            user_id,
            application_id,
            }),
        });
        const data = await response.json();
        if (data.errors) {
            console.log("Received the following errors");
            console.log(data.errors);
            return data.errors;
         }
    await dispatch(getAllMessages())
    return {};
}

//=========================================================
//REDUCER
//=========================================================
const initialState = { messageData: null };

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return {messages: action.payload}
        case GET_MESSAGE:
            return {message: action.payload}
        case CREATE_MESSAGE:
            return {message: action.payload}
        case UPDATE_MESSAGE:
            return {message: action.payload}
        case DELETE_MESSAGE:
            return {message: null}
        default:
            return state;
    }
}