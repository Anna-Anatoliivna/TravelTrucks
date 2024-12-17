import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../redux/campers/campersSlice';
import CamperCard from '../components/CamperCard/CamperCard';

function Catalog() {
  const dispatch = useDispatch();
  const { campers, status } = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog</h1>
      {status === 'loading' ? <p>Loading...</p> : null}
      <div>
        {campers.map(camper => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
