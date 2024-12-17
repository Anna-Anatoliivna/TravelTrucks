import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Campers of your dreams</h1>
      <button onClick={() => navigate('/catalog')}>View Now</button>
    </div>
  );
}

export default Home;
