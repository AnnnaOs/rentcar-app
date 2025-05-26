import { useDispatch, useSelector } from 'react-redux';

import { incrementPage } from '../../redux/cars/slice';
import {
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/cars/selectors';

import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  const handleClick = () => {
    dispatch(incrementPage());
  };

  if (isLoading || page >= totalPages) return null;

  return (
    <button onClick={handleClick} className={s.loadMore} disabled={isLoading}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
