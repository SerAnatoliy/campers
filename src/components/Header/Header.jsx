import { HeaderWrapper, Logo, ListItem, ListNav, ItemsLink, SpanName } from './Header.module';
import { ReactComponent as Van } from '../../images/icons/campVan.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Van style={{ width: '40px', height: '40px', fill: '#e44848' }} />
        <span>
          Rental
          <SpanName>of</SpanName>
          Campers
        </span>
      </Logo>
      <ListNav>
        <ListItem>
          <ItemsLink to="/">Home</ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/catalog">Catalog</ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/favourites">Favourites</ItemsLink>
        </ListItem>
      </ListNav>
    </HeaderWrapper>
  );
};

export default Header;
