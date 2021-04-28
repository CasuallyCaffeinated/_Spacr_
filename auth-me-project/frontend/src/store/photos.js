import { csrfFetch } from "./csrf";

const GET_USER_PHOTOS = "photos/getUserPhotos"
const UPDATE_USER_PHOTO = "photos/updateUserPhoto"


////////////* ACTION CREATORS */////////////////


const setUserPhotos = (photos) => ({
    type: GET_USER_PHOTOS,
    photosPayload: photos
})

const updateImg = photo => ({
    type: UPDATE_USER_PHOTO,
    photoPayload: photo
})


////////////* THUNK ACTION CREATOR *////////////////////
export const getUserPhotos = (id) => async dispatch => {
        const res = await csrfFetch(`/api/users/photos/${id}`)
        if (res.ok) {
            const photos = await res.json()
            dispatch(setUserPhotos(photos))
        }
}

export const updateUserPhoto = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/users/photo/${payload.id}`, {
        method: `PUT`,
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(response.ok) {
        const updatedPhoto = await response.json();
        dispatch(updateImg(updatedPhoto))
    }
}

////////////////////////////* REDUCER *///////////////////////////
const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_PHOTOS:
            const newState = {}
            action.photosPayload.forEach(photo => {
                newState[photo.id] = photo
            })
            return newState
        default:
            return state
    }
}

export default photoReducer;
