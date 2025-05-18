import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Icon from '../Icon/Icon';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.content}>
          <Link className={s.logo} to="/">
            {/* <img src="/logo.svg" alt="Logo" /> */}
            <Icon name="logo" className={s.logoIcon} />
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
export default Header;
