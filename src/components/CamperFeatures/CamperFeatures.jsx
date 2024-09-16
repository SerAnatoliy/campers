import { renderIfDetails } from '../../utils/ifDetails';
import { correctDetails } from '../../utils/correctDetails';
import { upperText } from '../../utils/upperText';

import { ReactComponent as Transmision } from '../../images/icons/transmision.svg';
import { ReactComponent as Benz } from '../../images/icons/benz.svg';
import { ReactComponent as Kitchen } from '../../images/icons/kitchen.svg';
import { ReactComponent as Vind } from '../../images/icons/vind.svg';
import { ReactComponent as Bathroom } from '../../images/icons/bathroom.svg';
import { ReactComponent as Gas } from '../../images/icons/gas.svg';
import { ReactComponent as Microwave } from '../../images/icons/microwave.svg';
import { ReactComponent as Water } from '../../images/icons/water.svg';

import { ReactComponent as Television } from '../../images/icons/tv.svg';
import { ReactComponent as Freezer } from '../../images/icons/freezer.svg';
import { ReactComponent as Radio } from '../../images/icons/radio.svg';

import {
  InfoWrapper,
  InfoList,
  InfoTitle,
  BarLine,
  DetailsList,
  DetailsItem,
  DetailsItemName,
} from './CamperFeatures.module';

const CamperFeatures = ({ data }) => {
  const {
    transmission,
    kitchen,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    airConditioner,
    gas,
    microwave,
    water,
    refrigerator,
    TV,
    bathroom,
    radio,
  } = data;

  return (
    <InfoWrapper>
      <InfoList>
        {renderIfDetails(transmission, <Transmision style={{ marginRight: '8px' }} />, transmission)}
        {renderIfDetails(engine, <Benz style={{ marginRight: '8px' }} />, engine)}
        {renderIfDetails(kitchen, <Kitchen style={{ marginRight: '8px' }} />, kitchen && 'kitchen')}
        {renderIfDetails(airConditioner, <Vind style={{ marginRight: '8px' }} />, airConditioner && 'ac')}
        {renderIfDetails(gas, <Gas style={{ marginRight: '8px' }} />, `gas ${gas}`)}
        {renderIfDetails(microwave, <Microwave style={{ marginRight: '8px' }} />, microwave && 'microwave')}
        {renderIfDetails(water, <Water style={{ marginRight: '8px' }} />, `water ${water}`)}
        {renderIfDetails(TV, <Television style={{ marginRight: '8px' }} />, TV && 'tv')}
        {renderIfDetails(refrigerator, <Freezer style={{ marginRight: '8px' }} />, refrigerator && 'treezer')}
        {renderIfDetails(radio, <Radio style={{ marginRight: '8px' }} />, radio && 'radio')}
        {renderIfDetails(bathroom, <Bathroom style={{ marginRight: '8px' }} />, bathroom && 'bathroom')}
      </InfoList>

      <InfoTitle>Vehicle details</InfoTitle>
      <BarLine></BarLine>

      <DetailsList>
        <DetailsItem>
          <DetailsItemName>Form</DetailsItemName>
          <DetailsItemName>{upperText(form)}</DetailsItemName>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemName>Length</DetailsItemName>
          <DetailsItemName>{correctDetails(length)}</DetailsItemName>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemName>Width</DetailsItemName>
          <DetailsItemName>{correctDetails(width)}</DetailsItemName>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemName>Height</DetailsItemName>
          <DetailsItemName>{correctDetails(height)}</DetailsItemName>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemName>Tank</DetailsItemName>
          <DetailsItemName>{correctDetails(tank)}</DetailsItemName>
        </DetailsItem>
        <DetailsItem>
          <DetailsItemName>Consumption</DetailsItemName>
          <DetailsItemName>{consumption}</DetailsItemName>
        </DetailsItem>
      </DetailsList>
    </InfoWrapper>
  );
};

export default CamperFeatures;
