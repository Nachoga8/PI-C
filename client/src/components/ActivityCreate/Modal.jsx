import { StyledModal } from "./styledModal"

const Modal = ({ showModal, setShowModal }) => {
    return (
        <StyledModal>
            <div className="contenedor">
           
                 <>
                 <h2>your activity has been successfully created</h2> 
                 <div>
                 <i class="far fa-check-circle"></i>
                 </div>
                <button className="volver" onClick={() => setShowModal(false)} >goBack</button>
                 </>
            
            </div>
        </StyledModal>
    )
}

export default Modal