import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import {
  formatAddress,
  formatMileage,
  formatPrice,
} from '../../helpers/formatters';

import Icon from '../Icon/Icon';
import s from './CatalogItem.module.css';

const CatalogItem = ({ car }) => {
  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(item => item.id === car.id);

  const handleFavorite = () => {
    dispatch(toggleFavorite(car));
  };

  const { city, country } = formatAddress(car.address);

  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={s.carImage}
        />
        <button
          onClick={handleFavorite}
          className={`${s.favoriteBtn} ${isFavorite ? s.active : ''}`}
          type="button"
        >
          <Icon
            name={isFavorite ? 'heart-active' : 'heart-default'}
            className={s.heartIcon}
          />
        </button>
      </div>

      <div className={s.info}>
        <div className={s.titleRow}>
          <h3 className={s.carTitle}>
            {car.brand} <span className={s.carModel}>{car.model}</span>,{' '}
            {car.year}
          </h3>
          <span className={s.price}>{formatPrice(car.rentalPrice)}</span>
        </div>

        <div className={s.detailsContainer}>
          <div className={s.detailsRow}>
            <span className={s.detail}>{city}</span>
            <span className={s.separator}></span>
            <span className={s.detail}>{country}</span>
            <span className={s.separator}></span>
            <span className={s.detail}>{car.rentalCompany}</span>
            <span className={s.separator}></span>
          </div>
          <div className={s.detailsRow}>
            <span className={s.detail}>{car.type}</span>
            <span className={s.separator}></span>
            <span className={s.detail}>{formatMileage(car.mileage)} km</span>
          </div>
        </div>
      </div>

      <Link to={`/catalog/${car.id}`} className={s.readMoreBtn}>
        Read more
      </Link>
    </div>
  );
};

export default CatalogItem;
