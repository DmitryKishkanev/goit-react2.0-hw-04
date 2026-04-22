import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ imageName }, { resetForm }) => {
    onSubmit(imageName);
    resetForm();
  };

  return (
    <header>
      <Formik initialValues={{ imageName: '' }} onSubmit={handleSubmit}>
        <Form>
          <button type="submit">Search</button>

          <Field
            name="imageName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
