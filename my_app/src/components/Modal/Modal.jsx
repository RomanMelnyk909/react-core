import styles from "./modal.module.css";
import { createPortal } from "react-dom";

const modalDiv = document.getElementById("portal");

const Modal = () => {
  return createPortal(<div>Modal</div>, modalDiv);
};

export default Modal;
