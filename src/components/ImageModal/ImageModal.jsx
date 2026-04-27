import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';
import style from './ImageModal.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: 0,
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
          <IoCloseSharp className={style.closeIcon} />
        </button>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  content: PropTypes.shape({
    urls: PropTypes.shape({
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
  }).isRequired,

  onCloseModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};

export default ImageModal;
