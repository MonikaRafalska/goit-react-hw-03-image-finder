import React from "react";
import styles from "./Modal.module.css"

class Modal extends React.Component {
  render() {
    const { largeImg, closeModal } = this.props;

    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
