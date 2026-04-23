import { BeatLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <BeatLoader
      color="red"
      loading={true}
      className={style.override}
      size={15}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
