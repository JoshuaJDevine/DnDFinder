const GET_IMAGES = "session/GET_IMAGES"

const getImages = (images) => ({
    type: GET_IMAGES,
    payload: images
});

export const getDeviantArtImages = () => async (dispatch)  => {
    const response = await fetch('/api/auth/devAuth/',{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    const images = await fetch(`/api/images/${data.access_token}/`,{
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const imageDate = await images.json();
    dispatch(getImages(imageDate))
}

//=========================================================
//REDUCER
//=========================================================
const initialState = { images: null };

export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {images: action.payload}
        default:
            return state;
    }
}