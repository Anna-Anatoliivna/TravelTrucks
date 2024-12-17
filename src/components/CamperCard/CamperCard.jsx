import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/campers/campersSlice';
// import { Link } from 'react-router-dom';

const CamperCard = ({ id, name, original, price, description }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.campers.favorites);

  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <>
      <ul>
        <li>
          src={original} alt={name}        </li>
        <li>{name}</li>
        <li>{price.toFixed(2)} </li>
        <li>{description}</li>
      </ul>
     
      <ButtonsContainer>
      {/* Кнопка для переходу на сторінку деталей */}
      <Link to={`/catalog/${id}`} target="_blank">
          <Button className="details">Show more</Button>
        </Link>
      {/* Кнопка для додавання до обраних */}
      <button
        className="favorite"
        type="button"
        onClick={handleFavoriteClick}
        // isFavorite={isFavorite}
      >
        {isFavorite ? '❤️ Remove' : '⭐ Add to favorites'}
      </button>
      </ButtonsContainer>
    </>
  );
};

export default CamperCard;
