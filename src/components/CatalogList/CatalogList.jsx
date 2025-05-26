import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCars } from '../../redux/cars/operations';
import { selectFilters } from '../../redux/filters/selectors';
import {
  selectCars,
  selectPage,
  selectIsLoading,
} from '../../redux/cars/selectors';

import NoResultsMessage from '../NoResultsMessage/NoResultsMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import CatalogItem from '../CatalogItem/CatalogItem';
import Loader from '../Loader/Loader';
import s from './CatalogList.module.css';

const CatalogList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(getCars({ page: 1, ...filters }));
  }, [dispatch, filters]);

  useEffect(() => {
    if (page > 1) {
      dispatch(getCars({ page, ...filters }));
    }
  }, [dispatch, page, filters]);

  return (
    <section className={s.catalogSection}>
      <div className="container">
        {!isLoading && cars.length === 0 ? (
          <NoResultsMessage />
        ) : (
          <ul className={s.list}>
            {cars.map(car => (
              <li key={car.id} className={s.item}>
                <CatalogItem car={car} />
              </li>
            ))}

            {isLoading && <Loader />}
          </ul>
        )}

        <LoadMoreBtn />
      </div>
    </section>
  );
};

export default CatalogList;
