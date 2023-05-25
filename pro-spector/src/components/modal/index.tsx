import { DivBackgroundModal } from "../../styles/modal"
import IModal from "../../interfaces/modal"

const Modal = ({children}: IModal) => {
  return (
    <DivBackgroundModal>

        <div className="divModalInfo">
            {children}
        </div>

    </DivBackgroundModal>
  )
}

export default Modal