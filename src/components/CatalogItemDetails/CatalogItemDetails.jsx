import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCarById } from '../../redux/cars/operations';
import { selectCarCurrent, selectIsLoading } from '../../redux/cars/selectors';

import RentForm from '../RentForm/RentForm';
import Loader from '../Loader/Loader';
import Icon from '../Icon/Icon';
import s from './CatalogItemDetails.module.css';

const CarItemDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const car = useSelector(selectCarCurrent);

  useEffect(() => {
    if (id) dispatch(getCarById(id));
  }, [dispatch, id]);

  if (isLoading || !car?.id) return <Loader />;

  const {
    img,
    brand,
    model,
    year,
    description,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
  } = car;

  const publicId = img.match(/\/(\d+)-/)[1];
  const features = [...accessories, ...functionalities];
  const [location, country] = address?.split(',').slice(-2) || [];

  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.contentWrap}>
          <div className={s.leftSideContent}>
            <div className={s.imageWrap}>
              <img src={img} alt={`${brand} ${model}`} className={s.image} />
            </div>

            <RentForm />
          </div>

          <div className={s.rightSideContent}>
            <div className={s.mainInfo}>
              <h2 className={s.title}>
                {brand} {model}, {year}
                <span className={s.publicId}>Id: {publicId}</span>
              </h2>
              <p className={s.meta}>
                <Icon name="location" className={s.iconLocation} /> {location}, {country} &nbsp;&nbsp;Mileage:{' '}
                {mileage.toLocaleString()} km
              </p>
              <p className={s.price}>${rentalPrice}</p>

              <p className={s.description}>{description}</p>
            </div>

            <div className={s.details}>
              <div className={s.rentalConditions}>
                <h3 className={s.subtitle}>Rental Conditions:</h3>
                <ul className={s.list}>
                  {rentalConditions?.map((cond, idx) => (
                    <li key={idx} className={s.item}>
                      <Icon name="check-circle" className={s.icon} /> {cond}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={s.carSpecifications}>
                <h3 className={s.subtitle}>Car Specifications:</h3>
                <ul className={s.list}>
                  <li className={s.item}>
                    <Icon name="calendar" className={s.icon} /> Year: {year}
                  </li>
                  <li className={s.item}>
                    <Icon name="car" className={s.icon} /> Type: {type}
                  </li>
                  <li className={s.item}>
                    <Icon name="fuel-pump" className={s.icon} /> Fuel Consumption: {fuelConsumption}
                  </li>
                  <li className={s.item}>
                    <Icon name="gear" className={s.icon} /> Engine Size: {engineSize}
                  </li>
                </ul>
              </div>

              <div className={s.carFeatures}>
                <h3 className={s.subtitle}>Accessories and functionalities:</h3>
                <ul className={s.list}>
                  {features?.map((item, idx) => (
                    <li key={idx} className={s.item}>
                      <Icon name="check-circle" className={s.icon} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarItemDetails;
