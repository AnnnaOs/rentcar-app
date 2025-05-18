import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCars } from '../../redux/cars/operations';
import { selectCars } from '../../redux/cars/selectors';
import CarList from '../../components/CarList/CarList';
import FilterBar from '../../components/FilterBar/FilterBar';
import s from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  return (
    <section className={s.sectionCatalogPage}>
      <div className={s.container}>
        <FilterBar />
        <CarList cars={cars} />
      </div>
    </section>
  );
};
export default CatalogPage;
