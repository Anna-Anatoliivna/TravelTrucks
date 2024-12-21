import css from './DetailsContainer.module.css';

const DetailsContainer = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default DetailsContainer;
