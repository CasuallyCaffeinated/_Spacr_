import { csrfFetch } from "./csrf";

const GET_USER_PHOTOS = "photos/getUserPhotos"

const setUserPhotos = (photos) => ({
    type: GET_USER_PHOTOS,
    photoPayload: photos
})


export const getUserPhotos = (id) => async dispatch => {
        const res = await csrfFetch(`/api/users/photos/${id}`)
        if (res.ok) {
            const photos = await res.json()
            dispatch(setUserPhotos(photos))
        }
}

const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USER_PHOTOS:
            const newState = {}
            action.photoPayload.forEach(photo => {
                newState[photo.id] = photo
            })
            return newState
        default:
            return state
    }
}

export default photoReducer;
