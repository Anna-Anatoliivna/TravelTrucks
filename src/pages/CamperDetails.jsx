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
          <h2>Features</h2>
          <ul>
            <li>transmission</li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#"></use>
              </svg>
              engine
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-wind"></use>
              </svg>
              AC
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-ph_shower"></use>
              </svg>
              Bathroom
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-cup-hot"></use>
              </svg>
              Kitchen
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-tv"></use>
              </svg>
              TV
            </li>
            <li>Radio</li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-solar_fridge-outline"></use>
              </svg>
              Refrigerator
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-lucide_microwave"></use>
              </svg>
              Microwave
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-hugeicons_gas-stove"></use>
              </svg>
              Gas
            </li>
            <li>
              <svg width="20" height="20">
                <use href="/sprite.svg#icon-ion_water-outline"></use>
              </svg>
              Water
            </li>
          </ul>

          <h2>Reviews</h2>

          <h3>Vehicle details</h3>
          <ul>
            <li>Form {selectedCamper.form}</li>
            <li>Length {selectedCamper.length}</li>
            <li>Width {selectedCamper.width}</li>
            <li>Height {selectedCamper.height}</li>
            <li>Tank {selectedCamper.tank}</li>
            <li>Consumption {selectedCamper.consumption}</li>
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CamperDetails;
