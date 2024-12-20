import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} className={css.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
