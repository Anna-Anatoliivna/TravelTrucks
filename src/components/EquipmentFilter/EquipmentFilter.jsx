import FilterItem from '../FilterItem/FilterItem';
import css from './EquipmentFilter.module.css';

const EquipmentFilter = ({ filtersDefaultValue, type, inputName }) => {
  // console.log('EquipmentFilter filtersDefaultValue:', filtersDefaultValue);

  const filterData = [
    { key: 'AC', defaultValue: filtersDefaultValue.AC },
    { key: 'Automatic', defaultValue: filtersDefaultValue.transmission },
    { key: 'Kitchen', defaultValue: filtersDefaultValue.kitchen },
    { key: 'TV', defaultValue: filtersDefaultValue.TV },
    { key: 'Bathroom', defaultValue: filtersDefaultValue.ph_shower },
  ];

  return (
    <div>
      <p className={css.filters}>Filters</p>
      <h3 className={css.title}>Vehicle equipment</h3>
      <div className={css.boxFilter}>
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
