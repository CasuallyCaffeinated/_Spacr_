import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

import { addUserPhoto } from "../../store/photos";

function ProfileHeader() {
    const user = useSelector(state => state.session.user)
    const photo = useSelector(state => state.photo)
    const dispatch = useDispatch();

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
                        <li>
                            <button
                            className="show-add-modal"
                            onClick={handleClick}
                            ><i class="fas fa-plus-square"></i></button>
                            {open && <AddImgModal />}
                        </li>
                        <li>Add a photo</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function AddImgModal() {

    const [addImgModal, setAddImgModal] = useState(false);

    const handleClick = () => {
            setAddImgModal(!addImgModal)
        };

    return (
        <div>
            <div className="add-img-modal">
                {addImgModal ? <AddImgModal /> : null}
                <h2>TEST</h2>
            </div>
        </div>
    )
}


export default ProfileHeader;
