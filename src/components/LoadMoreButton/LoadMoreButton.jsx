import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ handleLoadMore }) => {
  return (
    <div className="container">
      <button onClick={handleLoadMore} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreButton;
