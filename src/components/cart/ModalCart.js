import "./Modal.css";

const ModalCart = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();
    return (
      <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          {children}
          <button className="modal-close" onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </article>
    );
  };
};

export default ModalCart;
