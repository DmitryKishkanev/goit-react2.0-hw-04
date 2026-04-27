import PropTypes from 'prop-types';
import style from './ImageCard.module.css';

const ImageCard = ({ image, onOpenModal }) => {
  return (
    <button
      className={style.ImageCardButton}
      type="button"
      onClick={() => onOpenModal(image)}
    >
      <img
        className={style.ImageCardImg}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className={style.ImageCardContent}>
        <span> Created at: {image.created_at}</span>
        <span>Likes: {image.likes}</span>
      </div>
    </button>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string.isRequired,
    created_at: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,

  onOpenModal: PropTypes.func.isRequired,
};

export default ImageCard;
