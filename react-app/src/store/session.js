// constants
const SET_USER = "session/SET_USER";
const SET_APPLICANT = "session/SET_APPLICANT"
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const setApplicant = (user) => ({
    type: SET_APPLICANT,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { user: null, applicant: null };

export const getApplicant = (id) => async (dispatch) => {
    const response = await fetch(`/api/auth/getApplicant/${id}`, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await response.json();
    dispatch(setApplicant(data));
}

export const authenticate = () => async (dispatch) => {
    const response = await fetch('/api/auth/',{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (data.errors) {
        return;
    }
    
    dispatch(setUser(data))
  }
  
export const login = (email, password) => async (dispatch)  => {
    const response = await fetch('/api/auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    
    dispatch(setUser(data))
    return {};
  }
  
export const logout = () => async (dispatch) => {
    const response = await fetch("/api/auth/logout/", {
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    const data = await response.json();
    dispatch(removeUser());
  };

export const signUp = (username, email, password) => async (dispatch)  => {
    const response = await fetch("/api/auth/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    
    dispatch(setUser(data))
    return {};
  }

export default function reducer(state=initialState, action) {
    console.log(state)
    switch (action.type) {
        case SET_USER:
            return {user: action.payload}
        case REMOVE_USER:
            return {user: null}
        case SET_APPLICANT:
            return {user:state.user, applicant: action.payload}
        default:
            return state;
    }
}
