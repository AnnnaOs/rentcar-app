import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/cars/operations';
import { incrementPage, resetCars } from '../../redux/cars/slice';
import { selectCars, selectPage, selectTotalPages, selectIsLoading } from '../../redux/cars/selectors';
import Loader from '../Loader/Loader';
import CarItem from '../CarItem/CarItem';
import s from './CarList.module.css';

const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetCars());
    dispatch(getCars({ page: 1 }));
  }, [dispatch]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getCars({ page }));
    }
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {cars.map(car => (
          <li key={car.id} className={s.item}>
            <CarItem car={car} />
          </li>
        ))}

        {isLoading && <Loader />}
      </ul>

      {!isLoading && page < totalPages && (
        <button onClick={handleLoadMore} className={s.loadMore} disabled={isLoading}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CarList;
