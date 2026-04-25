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
    </button>
  );
};

export default ImageCard;
