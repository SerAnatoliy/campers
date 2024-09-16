import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, deleteFavourite } from '../../store/favouritesSlice';
import { selectFavourites } from '../../store/selectors';
import MainButton from '../MainButton/MainButton';
import Slider from '../../components/Slider/Slider';
import CamperInfo from '../../components/CamperInfo/CamperInfo';
import { Modal } from '../../components/Modal/Modal';

import { sliceText } from '../../utils/sliceText';
import { correctPrice } from '../../utils/correctPrice';
import { renderIfDetails } from '../../utils/ifDetails';
import { isFavourite } from '../../utils/isFavourite';

import { ReactComponent as Transmision } from '../../images/icons/transmision.svg';
import { ReactComponent as Benz } from '../../images/icons/benz.svg';
import { ReactComponent as Kitchen } from '../../images/icons/kitchen.svg';
import { ReactComponent as Vind } from '../../images/icons/vind.svg';
import { ReactComponent as Star } from '../../images/icons/star.svg';
import { ReactComponent as Television } from '../../images/icons/tv.svg';
import { ReactComponent as Bathroom } from '../../images/icons/bathroom.svg';
import { ReactComponent as Microwave } from '../../images/icons/microwave.svg';
import { ReactComponent as Refrigerator } from '../../images/icons/refrigerator.svg';
import { ReactComponent as Radio } from '../../images/icons/radio.svg';
import { ReactComponent as Gas } from '../../images/icons/gas.svg';
import { ReactComponent as Water } from '../../images/icons/water.svg';

import {
  ListItem,
  NameWrapper,
  PriceContein,
  RatingWrapper,
  Rating,
  ImageItemWrapper,
  Description,
  DescriptionText,
  InfoWrapper,
  InfoList,
  Hearts,
  Maps,
} from './CatalogCard.module';
import { useState } from 'react';
import { upperText } from '../../utils/upperText';

const CatalogCard = ({ campers }) => {
  const {
    id,
    name,
    gallery,
    price,
    rating,
    reviews,
    location,
    description,
    transmission,
    engine,
    kitchen,
    airConditioner,
    TV,
    bathroom,
    microwave,
    refrigerator,
    radio,
    water,
    gas,
  } = campers;

  const favourites = useSelector(selectFavourites);
  const dispatch = useDispatch();

  const goFavourite = () => {
    if (isFavourite(id, favourites)) {
      dispatch(deleteFavourite(campers));
    } else {
      dispatch(addFavourite(campers));
    }
  };

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ListItem key={id}>
      <ImageItemWrapper>
        <Slider images={gallery} />
      </ImageItemWrapper>
      <div>
        <NameWrapper>
          <p>{name}</p>
          <PriceContein>
            <p>&euro;{correctPrice(price)}</p>
            <Hearts
              style={
                isFavourite(id, favourites)
                  ? { fill: '#E44848', stroke: '#E44848' }
                  : { fill: '#fff', stroke: '#101828' }
              }
              onClick={goFavourite}
              width={24}
              alt="Haert"
            />
          </PriceContein>
        </NameWrapper>

        <RatingWrapper>
          <Rating>
            <Star style={{ marginRight: '8px' }} />
            {rating} ({reviews.length} Reviews)
          </Rating>
          <span>
            <Maps style={{ marginRight: '8px' }} />
            {location}
          </span>
        </RatingWrapper>

        <Description>
          <DescriptionText>{sliceText(description)}...</DescriptionText>
        </Description>

        <InfoWrapper>
          <InfoList>
            {transmission &&
              renderIfDetails(transmission, <Transmision style={{ marginRight: '8px' }} />, upperText(transmission))}
            {engine && renderIfDetails(engine, <Benz style={{ marginRight: '8px' }} />, upperText(engine))}
            {bathroom && renderIfDetails(bathroom, <Bathroom style={{ marginRight: '8px' }} />, 'Bathroom')}
            {kitchen && renderIfDetails(kitchen, <Kitchen style={{ marginRight: '8px' }} />, 'Kitchen')}
            {gas && renderIfDetails(gas, <Gas style={{ marginRight: '8px' }} />, 'Gas')}
            {water && renderIfDetails(water, <Water style={{ marginRight: '8px' }} />, 'Water')}
            {microwave && renderIfDetails(microwave, <Microwave style={{ marginRight: '8px' }} />, 'Microwave')}
            {airConditioner && renderIfDetails(airConditioner, <Vind style={{ marginRight: '8px' }} />, 'ac')}
            {refrigerator &&
              renderIfDetails(refrigerator, <Refrigerator style={{ marginRight: '8px' }} />, 'Refrigerator')}
            {radio && renderIfDetails(radio, <Radio style={{ marginRight: '8px' }} />, 'Radio')}
            {TV && renderIfDetails(TV, <Television style={{ marginRight: '8px' }} />, 'Tv')}
          </InfoList>
        </InfoWrapper>

        <MainButton type="button" size="medium" onClick={() => toggleModal()}>
          Show more
        </MainButton>

        {showModal && (
          <Modal onClose={() => toggleModal()}>
            <CamperInfo data={campers} onClose={() => toggleModal()} />
          </Modal>
        )}
      </div>
    </ListItem>
  );
};

export default CatalogCard;
