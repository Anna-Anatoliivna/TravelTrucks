import css from './LocationBox.module.css';


const LocationBox = ({ state }) => {
  return (
    <div className={css.locationConteiner}>
      <span className={css.locationText}>Location</span>
      <div className={css.inputConteiner}>
        <input
          className={css.inputBox}
          defaultValue={state}
          type="text"
          placeholder="City"
        />
        <svg className={css.icon}>
          <use href="/sprite.svg#icon-map"></use>
        </svg>
      </div>
    </div>
  );
};

export default LocationBox;
