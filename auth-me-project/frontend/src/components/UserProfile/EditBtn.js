
import { useState } from "react"


import "./photo.css"
import "../../index.css"
import ModalForm from "./modalForm";

function EditBtn({props}) {


    const [ open, setOpen ] = useState(false);

    return (
        <div>
            <span className="dd-span">
                        <button className="edit-btn" onClick={() => setOpen(!open)}>{<i class="fas fa-edit"></i>}</button>
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
            <button>Delete</button>
       </div>
    )
}

export default EditBtn;
