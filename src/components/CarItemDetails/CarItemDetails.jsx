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
        <div className={s.top}>
          <img src={img} alt={`${brand} ${model}`} className={s.image} />
          <div className={s.details}>
            <h2 className={s.title}>
              {brand} {model}, {year} <span className={s.id}>Id: {id}</span>
            </h2>
            <p className={s.meta}>
              <Icon name="location" className={s.icon} /> {location}, {country} &nbsp;&nbsp;
              <PiSteeringWheelFill /> {mileage.toLocaleString()} km
            </p>
            <p className={s.price}>${rentalPrice}</p>
            <p className={s.description}>{description}</p>

            <h2 className={s.subtitle}>Rental Conditions:</h2>
            <ul className={s.list}>
              {rentalConditions?.map((cond, idx) => (
                <li key={idx}>
                  <FaCheckCircle className={s.icon} /> {cond}
                </li>
              ))}
            </ul>

            <h2 className={s.subtitle}>Car Specifications:</h2>
            <ul className={s.list}>
              <li>
                <PiCalendarBlank className={s.icon} /> Year: {year}
              </li>
              <li>
                <FaCar className={s.icon} /> Type: {type}
              </li>
              <li>
                <MdOutlineLocalGasStation className={s.icon} /> Fuel Consumption: {fuelConsumption}
              </li>
              <li>
                <BsSpeedometer2 className={s.icon} /> Engine Size: {engineSize}
              </li>
            </ul>

            <h2 className={s.subtitle}>Accessories and functionalities:</h2>
            <ul className={s.list}>
              {accessories?.map((item, idx) => (
                <li key={idx}>
                  <FaCheckCircle className={s.icon} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form className={s.form}>
          <h2>Book your car now</h2>
          <p className={s.note}>Stay connected! We are always ready to help you.</p>
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <input type="text" name="date" placeholder="Booking date" />
          <textarea name="comment" placeholder="Comment"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default CarItemDetails;
