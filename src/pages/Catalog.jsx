import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../redux/campers/campersOperation';
import { selectFilters } from '../redux/filters/selectors';
import Container from '../components/Container/Container';
import CampersList from '../components/CampersList/CampersList';
import { setInitialCampers } from '../redux/campers/campersSlice';
import FilterList from '../components/FilterList/FilterList';

function Catalog() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const params = { ...filters, limit: 4, page: currentPage };
    dispatch(fetchCampers(params));
  }, [currentPage, dispatch, filters]);

  useEffect(() => {
    setCurrentPage(1);
    dispatch(setInitialCampers());
  }, [dispatch, filters]);

    const handleLoadMore = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <FilterList />
      <CampersList handleLoadMore={handleLoadMore} />
    </Container>
  );
}

export default Catalog;
