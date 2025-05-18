import { Link } from 'react-router-dom';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <h2 className={s.subTitle}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link to="/catalog" className={s.heroBtn}>
          View Catalog
        </Link>
      </div>
    </section>
  );
};

export default Hero;
