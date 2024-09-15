import { ReactComponent as Van } from '../../images/icons/campVan.svg';

import { NotFavorits, NotFavoritsText } from './NoInform.styled';

const NoInform = ({ text }) => {
  return (
    <NotFavorits>
      <Van style={{ width: '200px', height: '200px', fill: '#e44848' }} />
      <NotFavoritsText>{text}</NotFavoritsText>
    </NotFavorits>
  );
};

export default NoInform;
