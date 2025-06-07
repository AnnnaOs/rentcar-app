import { DotLoader } from 'react-spinners';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <DotLoader color="#0b44cd" height={50} margin={4} />
    </div>
  );
};

export default Loader;
