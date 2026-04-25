import ImageCard from '../ImageCard';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onOpenModal }) => {
  console.log(images);

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

export default ImageGallery;
