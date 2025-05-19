import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCarById } from '../../redux/cars/operations';
import { selectCarCurrent, selectIsLoading } from '../../redux/cars/selectors';
import Loader from '../../components/Loader/Loader';
import Icon from '../../components/Icon/Icon';
import s from './CarItemDetails.module.css';

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
    rentalCompany,
    address,
    rentalConditions,
    mileage,
    type,
    fuelConsumption,
    engineSize,
    accessories,
  } = car;

  const [location, country] = address?.split(',').slice(-2) || [];

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.contentWrap}>
          <div className={s.leftSideContent}>
            <div className={s.imageWrap}>
              <img src={img} alt={`${brand} ${model}`} className={s.image} />
            </div>

            <form className={s.form}>
              <h3>Book your car now</h3>
              <p className={s.note}>Stay connected! We are always ready to help you.</p>
              <input type="text" name="name" placeholder="Name*" required />
              <input type="email" name="email" placeholder="Email*" required />
              <input type="text" name="date" placeholder="Booking date" />
              <textarea name="comment" placeholder="Comment"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>

          <div className={s.details}>
            <h2 className={s.title}>
              {brand} {model}, {year} <span className={s.id}>Id: {id}</span>
            </h2>
            <p className={s.meta}>
              <Icon name="location" className={s.icon} /> {location}, {country} &nbsp;&nbsp;
              {mileage.toLocaleString()} km
            </p>
            <p className={s.price}>${rentalPrice}</p>
            <p className={s.description}>{description}</p>

            <h3 className={s.subtitle}>Rental Conditions:</h3>
            <ul className={s.list}>
              {rentalConditions?.map((cond, idx) => (
                <li key={idx}>
                  <Icon name="check-circle" className={s.icon} /> {cond}
                </li>
              ))}
            </ul>

            <h3 className={s.subtitle}>Car Specifications:</h3>
            <ul className={s.list}>
              <li>
                <Icon name="calendar" className={s.icon} /> Year: {year}
              </li>
              <li>
                <Icon name="car" className={s.icon} /> Type: {type}
              </li>
              <li>
                <Icon name="fuel-pump" className={s.icon} /> Fuel Consumption: {fuelConsumption}
              </li>
              <li>
                <Icon name="gear" className={s.icon} /> Engine Size: {engineSize}
              </li>
            </ul>

            <h3 className={s.subtitle}>Accessories and functionalities:</h3>
            <ul className={s.list}>
              {accessories?.map((item, idx) => (
                <li key={idx}>
                  <Icon name="check-circle" className={s.icon} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarItemDetails;
