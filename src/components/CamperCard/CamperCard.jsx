import { Link } from 'react-router-dom';
import css from './CamperCard.module.css';
import DetalItem from '../DetalItem/DetalItem';

const CamperCard = ({ camperData, handleSetFavorite, favoriteCampers }) => {
  const {
    gallery,
    name,
    price,
    id,
    rating,
    reviews,
    location,
    description,
    transmission,
    engine,
    AC,
    kitchen,
    TV,
    bathroom,
  } = camperData;
  const isFavorite = favoriteCampers.includes(id);
  return (
    <>
      <div className={css.cardBox}>
        <img className={css.img} src={gallery[0].thumb} alt="Truck photo" />
        <div className={css.main}>
          <div className={css.title}>
            <h3 className={css.name}>{name}</h3>
            <div className={css.favoriteBox}>
              <h3 className={css.price}>€{price},00</h3>
              <button
                className={css.favoriteBtn}
                onClick={() => {
                  handleSetFavorite(id);
                }}
              >
                <svg
                  className={isFavorite ? css.isFavorite : ''}
                  width={26}
                  height={24}
                >
                  <use href="/sprite.svg#icon-hart"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={css.ratingLocation}>
            <div className={css.locationBox}>
              <svg className={css.ratingIcon}>
                <use href="/sprite.svg#icon-star"></use>
              </svg>
              <p
                className={css.rating}
              >{`${rating}(${reviews.length} reviews) `}</p>
            </div>
            <div className={css.locationBox}>
              <svg width={16} height={16} fill="#101828">
                <use href="/sprite.svg#icon-map"></use>
              </svg>
              <p className={css.rating}>
                {location.split(',').reverse().join(', ')}
              </p>
            </div>
          </div>

          <p className={css.description}>{description}</p>
          <ul className={css.equipment}>
            <DetalItem str={transmission} />
            <DetalItem str={engine} />
            {AC && <DetalItem str={'AC'} />}
            {kitchen && <DetalItem str={'kitchen'} />}
            {TV && <DetalItem str={'TV'} />}
            {bathroom && <DetalItem str={'bathroom'} />}
          </ul>
          <button className="showBtn">
            <Link className="showBtn" to={`/catalog/${id}`}>
              Show more
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default CamperCard;
