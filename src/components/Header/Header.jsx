import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';




const Header = () => {
  return (
    <>
      <Logo to="/">
      </Logo>
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        {/* <Link to="/favorites">Favorites</Link> */}
      </NavLink>
    </>
  );
};

export default Header;
