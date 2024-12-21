import { useSelector } from 'react-redux';
import { selectChoosenCamper } from '../../redux/campers/campersSelectors';
import css from './Details.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Details = () => {
  const [modalData, setModalData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const camperInfo = useSelector(selectChoosenCamper);

  const onModalClose = () => {
    setModalData(null);
    setIsOpen(false);
  };

    return (
    <>
      {modalIsOpen && (
        <Modal
          modalData={modalData}
          modalIsOpen={modalIsOpen}
          closeModal={onModalClose}
        />
      )}
      <div className={css.camperDetails}>
        <h2 className={css.name}>{camperInfo.name}</h2>
        <h2 className={css.price}>€{camperInfo.price},00</h2>
        <ul className={css.images}>
          {camperInfo.gallery.map(photo => (
            <li
              key={photo.thumb}
              onClick={() => {
                setIsOpen(true);
                setModalData(photo.original);
              }}
            >
              <img src={photo.thumb} alt="Camper photo" className={css.image} />
            </li>
          ))}
        </ul>
        <p className={css.description}>{camperInfo.description}</p>
      </div>
    </>
  );
};

export default Details;
