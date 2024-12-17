import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperDetails } from '../redux/campers/campersSlice';

function CamperDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCamper } = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(getCamperDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {selectedCamper ? (
        <>
          <h1>{selectedCamper.name}</h1>
          <p>Details: {selectedCamper.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CamperDetails;
