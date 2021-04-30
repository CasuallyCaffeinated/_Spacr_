import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

import { getUserPhotos } from "../../store/photos"

import Photo from "./Photo";
import "./photo.css"


function UserProfile() {
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photo)
    const user = useSelector(state => state.session.user)

    // console.log("THIS IS THE USER:", user);
    const { id } = useParams()

    useEffect(() => {

        dispatch(getUserPhotos(id))

    },[dispatch, id])

    return (
        <>
        <h1>Welcome to your profile {user.firstName}!</h1>
        <div id="master-div">
                        {
                        Object.values(photos).map(image => <Photo key={image.id} image={image} />)
                    }
        </div>
        </>
    )
}

export default UserProfile;
