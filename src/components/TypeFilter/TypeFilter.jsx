import FilterItem from '../FilterItem/FilterItem';
import css from '../EquipmentFilter/EquipmentFilter.module.css';

const TypeFilter = ({ inputName, type, filtersDefaultValue }) => {
  // console.log('TypeFilter filtersDefaultValue:', filtersDefaultValue);

  const filterData = [
    {
      key: 'PanelTruck',
      defaultValue: filtersDefaultValue.panelTruck ?? false,
    },
    {
      key: 'Integrated',
      defaultValue: filtersDefaultValue.integrated ?? false,
    },
    { key: 'Alcove', defaultValue: filtersDefaultValue.alcove ?? false },
  ];

  return (
    <div>
      <h3 className={css.title}>Vehicle type</h3>
      <div className={css.boxFilter}>
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
