import Modal from 'react-modal';
import style from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ content, onCloseModal, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={style.imageModalBox}>
        <img src={content.urls?.regular} alt={content.alt_description} />
        <button className={style.imageModalButton} onClick={onCloseModal}>
          close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
