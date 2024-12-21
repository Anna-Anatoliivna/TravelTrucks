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
      <div className={css.camperListBox}>
        <ul className={css.campersList}>
          {campers.map((camper, index) => (
            <li key={`${camper.id}-${index}`} className={css.listItem}>
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
          <div className={css.loadMoreContainer}>
            <LoadMoreButton handleLoadMore={handleLoadMore} />
          </div>
        )}
      </div>
    )
  );
};

export default CampersList;
