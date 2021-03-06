//=========================================================
//CONSTANTS
//=========================================================
const GET_GROUPS = "session/GET_GROUPS"
const GET_GROUPSWITHUSERS = "session/GET_GROUPSWITHUSERS"
const GET_GROUP = "session/GET_GROUP"
const CREATE_GROUP = "session/CREATE_GROUP"
const UPDATE_GROUP = "session/UPDATE_GROUP"
const DELETE_GROUP = "session/DELETE_GROUP"

const getGroups = (groups) => ({
    type: GET_GROUPS,
    payload: groups
});

const getGroupsWithUsers = (groups) => ({
    type: GET_GROUPSWITHUSERS,
    payload: groups
});

const getGroup = (group) => ({
    type: GET_GROUP,
    payload: group
});

const createGroup = (group) => ({
    type: CREATE_GROUP,
    payload: group
});

const updateGroup = (group) => ({
    type: UPDATE_GROUP,
    payload: group
})

const deleteGroup = (group) => ({
    type: UPDATE_GROUP,
    payload: group
})


export const getAllGroups = () => async (dispatch)  => {
    const response = await fetch('/api/groups/',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(getGroups(data))
}

export const getAllGroupsWithUsers = () => async (dispatch)  => {
    const response = await fetch('/api/groups/includeUsers/',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }

    dispatch(getGroups(data))
}

export const getOneGroup = id => async (dispatch) => {
    const res = await fetch(`/api/groups/${id}/`);
    const data = await res.json();
    dispatch(getGroup(data));
    return data;
}

export const createNewGroup = (name,
                               details,
                               where,
                               module,
                               dayOfWeek,
                               startTime,
                               endTime,
                               timeOfDay,
                               groupAdmin,
                               maxPartySize,
                               timeZone,
                               ) => async (dispatch)  => {
    const response = await fetch("/api/groups/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            details,
            where,
            module,
            dayOfWeek,
            startTime,
            endTime,
            timeOfDay,
            groupAdmin,
            maxPartySize,
            timeZone
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
    dispatch(getAllGroups())
    return {};
}

export const deleteMyGroup = (id) => async (dispatch) => {
    const response = await fetch(`/api/groups/${id}/`, {
        method: "DELETE"
    });
    if (response.ok) {
        await dispatch(deleteGroup(id));
        await dispatch(getAllGroups())
        return response;
    }
    else {
        console.log("Error deleting group" + id)
    }
}

export const updateMyGroup =  (id,
                               name,
                               details,
                               where,
                               module,
                               dayOfWeek,
                               startTime,
                               endTime,
                               timeOfDay,
                               groupAdmin,
                               maxPartySize,
                               timeZone,
                               ) => async (dispatch)  => {
    const response = await fetch(`/api/groups/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            details,
            where,
            module,
            dayOfWeek,
            startTime,
            endTime,
            timeOfDay,
            groupAdmin,
            maxPartySize,
            timeZone
            }),
        });
        const data = await response.json();
        if (data.errors) {
            console.log("Received the following errors");
            console.log(data.errors);
            return data.errors;
         }
    await dispatch(getAllGroups())
    return {};
}









//=========================================================
//REDUCER
//=========================================================
const initialState = { groups: null };

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_GROUPS:
            return {groups: action.payload}
        case GET_GROUP:
            return {groups:state.groups, group: action.payload}
        case CREATE_GROUP:
            return {group: action.payload}
        case  UPDATE_GROUP:
            return {group: action.payload}
        case  DELETE_GROUP:
            return {group: null}
        default:
            return state;
    }
}