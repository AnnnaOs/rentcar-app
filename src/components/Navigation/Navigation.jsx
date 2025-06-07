import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import s from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink className={buildLinkClass} to="/catalog" end>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
