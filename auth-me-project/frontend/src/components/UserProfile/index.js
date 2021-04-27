import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { getUserPhotos } from "../../store/photos"

import Photo from "./Photo";


function UserProfile() {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photo)
   
    const { id } = useParams()

    useEffect(() => {

        dispatch(getUserPhotos(id))

    },[dispatch, id])

    return (
        <>
        <h1>Welcome!</h1>
        {
            Object.values(photos).map(image => <Photo key={image.id} image={image} />)
        }
        </>
    )
}

export default UserProfile;
