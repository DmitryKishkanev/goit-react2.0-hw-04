import ImageCard from '../ImageCard';

const ImageGallery = ({ images }) => {
  console.log(images);

  return (
    <ul>
      {images.map(image => (
        <li key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
