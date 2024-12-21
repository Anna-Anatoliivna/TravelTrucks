import FilterItem from '../FilterItem/FilterItem';
import css from './EquipmentFilter.module.css';

const EquipmentFilter = ({ filtersDefaultValue, type, inputName }) => {
  // console.log('EquipmentFilter filtersDefaultValue:', filtersDefaultValue);

  const filterData = [
    { key: 'AC', defaultValue: filtersDefaultValue.AC },
    { key: 'automatic', defaultValue: filtersDefaultValue.transmission },
    { key: 'kitchen', defaultValue: filtersDefaultValue.kitchen },
    { key: 'TV', defaultValue: filtersDefaultValue.TV },
    { key: 'bathroom', defaultValue: filtersDefaultValue.bathroom },
  ];

  return (
    <div>
      <p className={css.filters}>Filters</p>
      <h3 className={css.filterName}>Vehicle equipment</h3>
      <div className={css.groupFilter}>
        {filterData.map(({ key, defaultValue }) => (
          <FilterItem
            key={key}
            inputName={inputName}
            filterValue={key}
            type={type}
            defaultValue={defaultValue}
          />
        ))}
      </div>
    </div>
  );
};

export default EquipmentFilter;
