import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import css from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  const activClass = ({ isActive }) => {
    return clsx(css.static, isActive && css.isActive);
  };

  return (
    <div className={css.navigation}>
      <Logo to="/"></Logo>
      <div className={css.menu}>
        <NavLink className={activClass} to="/">
          Home
        </NavLink>
        <NavLink className={activClass} to="/catalog">
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
