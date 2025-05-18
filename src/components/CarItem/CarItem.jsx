import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import { formatAddress, formatMileage, formatPrice } from '../../helpers/formatters';
import Icon from '../Icon/Icon';
import s from './CarItem.module.css';

const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(item => item.id === car.id);

  const handleFavorite = () => {
    dispatch(toggleFavorite(car));
  };

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img src={car.img} alt={`${car.brand} ${car.model}`} className={s.carImage} />
        <button onClick={handleFavorite} className={`${s.favoriteBtn} ${isFavorite ? s.active : ''}`} type="button">
          {/* <Icon name="heart-active" className={`${s.heartIcon} ${isFavorite ? s.active : ''}`} /> */}
          <Icon name={isFavorite ? 'heart-active' : 'heart-default'} className={s.heartIcon} />
        </button>
      </div>

      <div className={s.info}>
        <div className={s.titleRow}>
          <h3 className={s.carTitle}>
            {car.brand} <span className={s.carModel}>{car.model}</span>, {car.year}
          </h3>
          <span className={s.price}>{formatPrice(car.rentalPrice)}</span>
        </div>
        <div className={s.detailsContainer}>
          <p className={s.details}>
            {formatAddress(car.address)} <span style={{ margin: '0 6px' }}>|</span> {car.rentalCompany}
          </p>
          <p className={s.details}>
            {car.type} | {formatMileage(car.mileage)} km
          </p>
        </div>
      </div>

      <Link to={`/catalog/${car.id}`} className={s.readMoreBtn}>
        Read more
      </Link>
    </div>
  );
};

export default CarItem;
