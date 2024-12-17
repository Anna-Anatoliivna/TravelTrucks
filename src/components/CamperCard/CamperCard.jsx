import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/campers/campersSlice';
// import { Link } from 'react-router-dom';


const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.campers.favorites);

  const isFavorite = favorites.includes(camper.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(camper.id));
  };

  return (
    <>
      <ul>
        <li>
          {' '}
          src={camper.image} alt={camper.name}{' '}
        </li>
        <li>{camper.name}</li>
        <li>{camper.price.toFixed(2)} </li>
      </ul>
      <ul>
        <li>🚗 Тип кузова: {camper.type}</li>
        <li>⚙️ Трансмісія: {camper.transmission}</li>
        {camper.AC && <li>❄️ Кондиціонер</li>}
        {camper.kitchen && <li>🍽️ Кухня</li>}
      </ul>

      {/* <ButtonsContainer> */}
      {/* Кнопка для переходу на сторінку деталей */}
      {/* <Link to={`/catalog/${camper.id}`} target="_blank">
          <Button className="details">Show more</Button>
        </Link> */}

      {/* Кнопка для додавання до обраних */}
      <button
        className="favorite"
        type="button"
        onClick={handleFavoriteClick}
        // isFavorite={isFavorite}
      >
        {isFavorite ? '❤️ Remove' : '⭐ Add to favorites'}
      </button>
      {/* </ButtonsContainer> */}
    </>
  );
};

export default CamperCard;