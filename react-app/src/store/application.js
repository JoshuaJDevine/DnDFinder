//=========================================================
//CONSTANTS
//=========================================================
const GET_APPLICATIONS = "session/GET_APPLICATIONS"
const GET_APPLICATION = "session/GET_APPLICATION"
const CREATE_APPLICATION = "session/CREATE_APPLICATION"
const UPDATE_APPLICATION = "session/UPDATE_APPLICATION"
const DELETE_APPLICATION = "session/DELETE_APPLICATION"

const getApplications = (applications) => ({
    type: GET_APPLICATIONS,
    payload: applications
});

const getApplication = (application) => ({
    type: GET_APPLICATION,
    payload: application
});

const createApplication = (application) => ({
    type: CREATE_APPLICATION,
    payload: application
});

const updateApplication = (application) => ({
    type: UPDATE_APPLICATION,
    payload: application
})

const deleteApplication = (application) => ({
    type: DELETE_APPLICATION,
    payload: application
})

export const getAllApplications = () => async (dispatch)  => {
    const response = await fetch('/api/applications/',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(getApplications(data))
}

export const getOneApplication = id => async (dispatch) => {
    const res = await fetch(`/api/applications/${id}`);
    const data = await res.json();

    dispatch(getApplication(data));
}

export const createNewApplication = (text,
                               group_id,
                               user_id,
                               ) => async (dispatch)  => {
    const response = await fetch("/api/applications/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text,
            group_id,
            user_id,
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
    dispatch(getAllApplications())
    return {};
}


export const deleteMyApplication = (id) => async (dispatch) => {
    const response = await fetch(`/api/applications/${id}/`, {
        method: "DELETE"
    });
    if (response.ok) {
        await dispatch(deleteApplication(id));
        await dispatch(getAllApplications())
        return response;
    }
    else {
        console.log("Error deleting application" + id)
    }
}



export const updateMyApplication =  (id,
                                     text,
                                     group_id,
                                     user_id,
                               ) => async (dispatch)  => {
    const response = await fetch(`/api/applications/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
                text,
                group_id,
                user_id,
            }),
        });
        const data = await response.json();
        if (data.errors) {
            console.log("Received the following errors");
            console.log(data.errors);
            return data.errors;
         }
    await dispatch(getAllApplications())
    return {};
}



//=========================================================
//REDUCER
//=========================================================
const initialState = { applicationData: null };

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