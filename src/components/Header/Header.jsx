import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.content}>
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};
export default Header;
