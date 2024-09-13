import { useState } from 'react';
import MainButton from '../../MainButton/MainButton';
import { Modal } from '../../Modal/Modal';
import BookNow from '../../BookNow/BookNow';
import { HeroWrapper, ModalHeroWrapper, HeroInfo, HeroTitle, BtnCloses } from './Hero.styled';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <HeroWrapper>
        <HeroInfo>
          <HeroTitle>Captivating adventures await you!</HeroTitle>
          <MainButton type="button" size="small" onClick={() => toggleModal()}>
            Book now
          </MainButton>
        </HeroInfo>
      </HeroWrapper>

      {showModal && (
        <Modal onClose={() => toggleModal()}>
          <ModalHeroWrapper>
            <BtnCloses onClick={() => toggleModal()} />
            <BookNow />
          </ModalHeroWrapper>
        </Modal>
      )}
    </>
  );
};

export default Hero;
