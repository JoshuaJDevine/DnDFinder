//=========================================================
//CONSTANTS
//=========================================================
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