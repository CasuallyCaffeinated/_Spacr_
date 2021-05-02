import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import { useParams } from "react-router-dom";

import { addUserPhoto } from "../../store/photos";



//TODO: GLOBAL CATEGORIES ARRAY:
const CATEGORIES = [
    "Binary Stars",
    "Black Hole",
    "Globular Cluster",
    "Individual Star",
    "Neutron Star",
    "Nursery",
    "Open Cluster",
    "The Sun",
    "White Dwarfs",
    "Cluster of Galaxies",
    "Colliding Galaxy",
    "Elliptical Galaxy",
    "Local Group",
    "The Milky Way",
    "Spiral Galaxy",
    "Nebula",
    "Supernova Remnants",
    "Quasar",
    "Active Galactic Nuclei",
    "Dark Matter"
]

function ProfileHeader() {
    const user = useSelector(state => state.session.user)
    const photo = useSelector(state => state.photo)
    // const dispatch = useDispatch();

    // useEffect(() => {
        //     console.log(photo);
        // }, [])

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }


    return (
        <div>
            <div className="ph-container">
                <div className="ph-welcome-msg">
                <h1>Welcome to your profile {user.firstName}!</h1>
                </div>
                <div className="add-pic-div">
                    <ul>
                        <li className="add-pic-modal">Add a photo</li>
                        <li>
                            <button
                            className="show-add-modal"
                            onClick={handleClick}
                            ><i class="fas fa-plus-square"></i></button>
                            {open && <AddImgModal props={handleClick}/>}
                        </li>
                    </ul>
                </div>
            </div>
                <div className="border-div">
                    <hr />
                </div>
        </div>
    )
}

function AddImgModal({props}) {

    const handleClick = props;

    const dispatch = useDispatch();

    const { id } = useParams();

    // const [addImgModal, setAddImgModal] = useState(false);

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const [authorCredited, setAuthorCredited] = useState('')


    // const handleClick = () => {
    //         setOpen(false)
    //     };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            title,
            category,
            description,
            photoUrl,
            authorCredited,
            userId: id
        }

        dispatch(addUserPhoto(formData))
    }

    return (
        <div>
            <div className="add-img-modal">
                {/* {open ? <AddImgModal /> : null} */}
                <form id="add-img-form" onSubmit={handleSubmit}>
                        <div className="main-add-img-modal-body">
                            <label className="add-img-modal-labels">
                                Title
                                <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            <label className="add-img-modal-labels">
                                Category
                                <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                >
                                {CATEGORIES.map(category => (
                                    <option
                                    key={category}
                                    value={category}
                                    >
                                        {category}
                                    </option>
                                ))}
                                </select>
                            </label>
                            <label className="add-img-modal-labels">
                                    Description
                                    <textarea
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                     />
                            </label>
                            <label className="add-img-modal-labels">
                                Image URL
                                <input
                                type="text"
                                value={photoUrl}
                                onChange={(e) => setPhotoUrl(e.target.value)}
                                />
                            </label>
                            <label className="add-img-modal-labels">
                                Illustrator/Creator Credited
                                <input
                                type="text"
                                value={authorCredited}
                                onChange={(e) => setAuthorCredited(e.target.value)}
                                />
                            </label>
                        </div>
                        <button>Save Photograph</button>
                        <button onClick={handleClick}>Cancel</button>
                </form>
            </div>
        </div>
    )
}


export default ProfileHeader;
