import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import searchIcon from '../../assets/search.svg';
import PropTypes from 'prop-types';
import style from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = ({ imageName }, { resetForm }) => {
    if (imageName.trim() === '') {
      toast.error('Fill in the search field');

      return;
    }
    onSubmit(imageName);
    resetForm();
  };

  return (
    <header className={style.searchBarHeader}>
      <Formik initialValues={{ imageName: '' }} onSubmit={handleSubmit}>
        <Form className={style.searchBarForm}>
          <button className={style.searchBarButton} type="submit">
            <img
              className={style.searchBarIcon}
              src={searchIcon}
              alt="search"
            />
          </button>

          <Field
            className={style.searchBarField}
            name="imageName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>

      <Toaster position="top-right" reverseOrder={false} />
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
