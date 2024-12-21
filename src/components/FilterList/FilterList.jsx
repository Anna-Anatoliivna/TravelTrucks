import { useDispatch, useSelector } from 'react-redux';
import LocationBox from '../LocationBox/LocationBox';
import EquipmentFilter from '../EquipmentFilter/EquipmentFilter';
import TypeFilter from '../TypeFilter/TypeFilter';
import { setFilters } from '../../redux/filters/slice';
import { selectFilters } from '../../redux/filters/selectors';

const FilterList = () => {

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const formElements = e.target.elements;
    const formData = {};
    if (formElements[0].value) formData.location = formElements[0].value;
    if (formElements.AC.checked) formData.AC = true;
    if (formElements.automatic.checked) formData.transmission = 'automatic';
    if (formElements.kitchen.checked) formData.kitchen = true;
    if (formElements.TV.checked) formData.TV = true;
    if (formElements.bathroom.checked) formData.bathroom = true;
    if (formElements.VehicleTypeFilter.value)
      formData.form = formElements.VehicleTypeFilter.value;
    dispatch(setFilters(formData));
  };
  const filters = useSelector(selectFilters);
  const defaultFilter = {
    panelTruck: false,
    integrated: false,
    alcove: false,
  };
  defaultFilter[filters.form] = true;
  return (
    <form onSubmit={handleSubmit}>
      <LocationBox state={filters.location} />
      <EquipmentFilter
        inputName={'equipmentFilter'}
        type={'checkbox'}
        filtersDefaultValue={filters}
      />
      <TypeFilter
        inputName={'VehicleTypeFilter'}
        type={'radio'}
        filtersDefaultValue={defaultFilter}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default FilterList;
