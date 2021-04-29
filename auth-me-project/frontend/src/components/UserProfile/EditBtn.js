
import { useState } from "react"


import "./photo.css"
import "../../index.css"
import ModalForm from "./modalForm";


//////////* EDIT BTN COMPONENT *//////////
function EditBtn({props}) {


    const [ open, setOpen ] = useState(false);

    //? useState for CSS animation:
    // const [fadeInDown, setFadeInDown] = useState(true);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div>
            <span className="dd-span">
                        <button
                        className="edit-btn"
                        onClick={handleClick}
                        // onAnimationEnd={() => setFadeInDown(0)}
                        // onAnimationStart={() =>  setFadeInDown(1)}
                        // fadeInDown={fadeInDown}
                        >
                        {<i class="fas fa-edit"></i>}
                        </button>
                        {open && <DropDownMenu props={props} />}
                </span>
        </div>
    )



}

function DropDownMenu({props}) {

    //? THIS IS FOR MANAGING THE STATE OF THE APPLICATION
    const [fadeInDown, setFadeInDown] = useState(true);

    //? THIS IS FOR ALLOWING THE MODAL TO APPEAR
    const [modal, setModal] = useState(false);

    const modalGenerate = () => {
            setModal(!modal)
    }

    return (
       <div
    //    onAnimationEnd={() => setFadeInDown(0)}
       fadeInDown={fadeInDown}
       className="dropdown-town fadeInDown">
            {modal ? <ModalForm props={{setModal, id: props}} /> : null}
            <button
            onClick={modalGenerate}>Edit</button>
            <button id="red-btn">Delete</button>
       </div>
    )
}


export default EditBtn;
