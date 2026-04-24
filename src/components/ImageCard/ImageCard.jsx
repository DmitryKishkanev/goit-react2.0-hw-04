const ImageCard = ({ image, onOpenModal }) => {
  return (
    <div>
      <button type="button" onClick={() => onOpenModal(image)}>
        <img src={image.urls.small} alt={image.alt_description} />
      </button>
    </div>
  );
};

export default ImageCard;
