
import { useState } from "react"


import "./photo.css"
import "../../index.css"
import ModalForm from "./modalForm";

function EditBtn({props}) {


    const [ open, setOpen ] = useState(false);

    //? useState for CSS animation:
    const [fadeInDown, setFadeInDown] = useState(0);

    const handleClick = () => {
        setOpen(!open)
        setFadeInDown(1)
    }


    return (
        <div>
            <span className="dd-span">
                        <button
                        className="edit-btn"
                        onClick={handleClick}
                        onAnimationEnd={() => setFadeInDown(0)}
                        fadeInDown={fadeInDown}
                        >
                        {<i class="fas fa-edit"></i>}
                        </button>
                        {open && <DropDownMenu props={props} />}
                </span>
        </div>
    )
}

// function List(props) {

//     return (
//         <ul>
//             <li>
//                 {props.children}
//             </li>
//         </ul>
//     )
// }

function DropDownMenu({props}) {

    const [modal, setModal] = useState(false);

    const modalGenerate = () => {
            setModal(!modal)
    }

    return (
       <div className="dropdown-town">
            {modal ? <ModalForm props={{setModal, id: props}} /> : null}
            <button onClick={modalGenerate}>Edit</button>
            <button id="red-btn">Delete</button>
       </div>
    )
}

export default EditBtn;
