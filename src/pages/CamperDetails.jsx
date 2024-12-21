import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperById } from '../redux/campers/campersOperation';
import Loader from '../components/Loader/Loader';
import { selectLoaded } from '../redux/campers/campersSelectors';
import DetailsContainer from '../components/DetailsContainer/DetailsContainer';
import Details from '../components/Details/Details';

function CamperDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loaded = useSelector(selectLoaded);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <DetailsContainer>
      {loaded ? (
        <>
          <Details />
        </>
      ) : (
        <Loader />
      )}
    </DetailsContainer>
  );
}

export default CamperDetails;
