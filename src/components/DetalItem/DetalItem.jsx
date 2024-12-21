import css from './DetalItem.module.css';


const DetalItem = ({ str }) => {
  const icons = '/sprite.svg';

  return (
    <li className={css.container}>
      <svg width={20} height={20} fill="#101828">
        <use href={`${icons}#icon-${str}`}></use>
      </svg>
    </li>
  );
};

export default DetalItem;
