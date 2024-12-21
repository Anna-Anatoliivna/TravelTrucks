import FilterItem from '../FilterItem/FilterItem';
import css from '../EquipmentFilter/EquipmentFilter.module.css';

const TypeFilter = ({ inputName, type, filtersDefaultValue }) => {
  // console.log('TypeFilter filtersDefaultValue:', filtersDefaultValue);

  const filterData = [
    {
      key: 'panelTruck',
      defaultValue: filtersDefaultValue.panelTruck ?? false,
    },
    {
      key: 'integrated',
      defaultValue: filtersDefaultValue.integrated ?? false,
    },
    { key: 'alcove', defaultValue: filtersDefaultValue.alcove ?? false },
  ];

  return (
    <div>
      <h3 className={css.filterName}>Vehicle type</h3>
      <div className={css.groupFilter}>
        {filterData.map(({ key, defaultValue }) => (
          <FilterItem
            key={key}
            filterValue={key}
            type={type}
            inputName={inputName}
            defaultValue={defaultValue}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
