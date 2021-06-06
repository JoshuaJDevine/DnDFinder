//=========================================================
//CONSTANTS
//=========================================================
const GET_APPLICATIONS = "session/GET_APPLICATIONS"
const GET_APPLICATION = "session/GET_APPLICATION"
const CREATE_APPLICATION = "session/CREATE_APPLICATION"
const UPDATE_APPLICATION = "session/UPDATE_APPLICATION"
const DELETE_APPLICATION = "session/DELETE_APPLICATION"

const getApplications = (events) => ({
    type: GET_APPLICATIONS,
    payload: events
});

const getApplication = (event) => ({
    type: GET_APPLICATION,
    payload: event
});

const createApplication = (event) => ({
    type: CREATE_APPLICATION,
    payload: event
});

const updateApplication = (event) => ({
    type: UPDATE_APPLICATION,
    payload: event
})

const deleteApplication = (event) => ({
    type: DELETE_APPLICATION,
    payload: event
})

export const getAllApplications = () => async (dispatch)  => {
    const response = await fetch('/api/applications/',{
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

    dispatch(getApplications(data))
}


//=========================================================
//REDUCER
//=========================================================
const initialState = { events: null };

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_APPLICATIONS:
            return {applications: action.payload}
        case GET_APPLICATION:
            return {application: action.payload}
        case CREATE_APPLICATION:
            return {application: action.payload}
        case UPDATE_APPLICATION:
            return {application: action.payload}
        case DELETE_APPLICATION:
            return {application: null}
        default:
            return state;
    }
}