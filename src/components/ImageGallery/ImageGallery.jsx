import PropTypes from 'prop-types';
import ImageCard from '../ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={style.imagesList}>
      {images.map(image => (
        <li className={style.imagesItem} key={image.id}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        small: PropTypes.string,
      }).isRequired,
      alt_description: PropTypes.string.isRequired,
      created_at: PropTypes.string,
      likes: PropTypes.number,
    }),
  ).isRequired,

  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
