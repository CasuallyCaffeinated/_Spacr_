import { csrfFetch } from "./csrf";

//* READ:
const GET_USER_PHOTOS = "photos/getUserPhotos"
//* UPDATE:
const UPDATE_USER_PHOTO = "photos/updateUserPhoto"
//* DELETE:
const DELETE_USER_PHOTO = "photos/deleteUserPhoto"

////////////* ACTION CREATORS */////////////////


const setUserPhotos = (photos) => ({
    type: GET_USER_PHOTOS,
    photosPayload: photos
})

const updateImg = photo => ({
    type: UPDATE_USER_PHOTO,
    photoPayload: photo
})

const removeImg = photo => ({
    type: DELETE_USER_PHOTO,
    photoErased: photo
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

export const deleteUserPhoto = (payload) => async dispatch => {
    const response = await csrfFetch(`/api/users/photo/${payload.id}`, {
        method: "DELETE"
    })
    dispatch(removeImg())
}

////////////////////////////* REDUCER *///////////////////////////
const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_PHOTOS: {
            const newState = {}
            action.photosPayload.forEach(photo => {
                newState[photo.id] = photo
            })
            return newState
        }
            case UPDATE_USER_PHOTO: {
                const newState = {
                    ...state,
                    [action.photoPayload.id]: action.photoPayload
                }
                console.log(newState);
                return newState;
            }
            case DELETE_USER_PHOTO: {
                const 
            }
        default:
            return state
    }
}

export default photoReducer;
