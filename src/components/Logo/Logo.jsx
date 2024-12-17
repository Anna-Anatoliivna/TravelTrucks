
import { Link } from 'react-router-dom';


const Logo = ({ to = '/' }) => {
  return (
    <Link to={to}>
      <img
        src="/logo.svg"
        alt="TravelTrucks Logo"
        style={{ width: '136px', height: '16px' }}
      />
    </Link>
  );
};

export default Logo;
