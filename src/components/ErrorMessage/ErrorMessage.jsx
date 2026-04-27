import PropTypes from 'prop-types';

const ErrorMessage = ({ error }) => {
  return (
    <h2>
      Ой ошибка, всё пропало!!! <br />
      {error}
    </h2>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
