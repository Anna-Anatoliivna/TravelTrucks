import css from './FilterItem.module.css';

const FilterItem = ({ filterValue, type, inputName, defaultValue }) => {
  const icons = '/sprite.svg';
  return (
    <>
      <input
        className={css.box}
        type={type}
        id={filterValue}
        value={filterValue}
        defaultChecked={defaultValue}
        name={inputName}
      ></input>
      <label className={css.label} htmlFor={filterValue}>
        <svg width={32} height={32}>
          <use href={`${icons}#icon-${filterValue}`}></use>
        </svg>
        <p className={css.text}>{filterValue}</p>
      </label>
    </>
  );
};

export default FilterItem;
