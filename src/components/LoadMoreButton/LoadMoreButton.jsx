import PropTypes from 'prop-types';

const LoadMoreButton = ({ loadMore }) => {
  return (
    <button type="button" onClick={loadMore}>
      Load more
    </button>
  );
};

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default LoadMoreButton;
