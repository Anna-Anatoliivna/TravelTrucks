import { useNavigate } from 'react-router-dom';
import css from './Home.module.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className={css.home}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.subtitle}>
        You can find everything you want in our catalog
      </h2>
      <button onClick={() => navigate('/catalog')}>View Now</button>
    </div>
  );
}

export default Home;
