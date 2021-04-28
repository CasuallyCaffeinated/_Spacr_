import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"


// import { updateUserPhoto } from "../../store/photos"

import "./photo.css"
import "../../index.css"

function EditBtn() {

    const [ open, setOpen ] = useState(false);

    return (
        <div>
            <span>
                <ul>
                    <li>
                        <button className="edit-btn" onClick={() => setOpen(!open)}>{<i class="fas fa-edit"></i>}</button>
                        {open && <DropDownMenu />}
                    </li>
                </ul>
                </span>
        </div>
    )
}

function DropDownMenu(props) {

    return (
       <h1>Hello</h1>
    )
}

export default EditBtn;
