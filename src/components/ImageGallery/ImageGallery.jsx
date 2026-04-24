import ImageCard from '../ImageCard';

const ImageGallery = ({ images, onOpenModal }) => {
  console.log(images);

  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} onOpenModal={onOpenModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
