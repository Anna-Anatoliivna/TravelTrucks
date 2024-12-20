import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import {
  selectCampers,
  selectFavoriteCampers,
  selectIsLoading,
  selectNumberCampers,
} from "../../redux/campers/campersSelectors";
import css from "./CampersList.module.css";
import { setFavoriteCampers } from "../../redux/campers/campersSlice";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Loader from "../Loader/Loader";

const CampersList = ({ handleLoadMore }) => {
  const campers = useSelector(selectCampers);
  const favoriteCampers = useSelector(selectFavoriteCampers);
  const total = useSelector(selectNumberCampers);
  const loading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const handleFavorite = (id) => {
    dispatch(setFavoriteCampers(id));
  };

  const renderLoadMore = campers.length < total;
  return (
    campers && (
      <div className={css.groupCamperListAndLoadMore}>
        <ul className={css.campersList}>
          {campers.map(camper => (
            <li key={camper.id} className={css.listItem}>
              <CamperCard
                camperData={camper}
                favoriteCampers={favoriteCampers}
                handleSetFavorite={handleFavorite}
              />
            </li>
          ))}
        </ul>
        {loading && <Loader />}
        {renderLoadMore && !loading && (
          <LoadMoreButton handleLoadMore={handleLoadMore} />
        )}
      </div>
    )
  );
};

export default CampersList;
