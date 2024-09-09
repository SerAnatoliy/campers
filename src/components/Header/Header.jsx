import { HeaderWrapper, Logo, ListItem, ListNav, ItemsLink, SpanName } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <span>Logo</span>
        <SpanName>React</SpanName>
      </Logo>
      <ListNav>
        <ListItem>
          <ItemsLink to="/" exact>
            Home
          </ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/about">About</ItemsLink>
        </ListItem>
        <ListItem>
          <ItemsLink to="/contacts">Contacts</ItemsLink>
        </ListItem>
      </ListNav>
    </HeaderWrapper>
  );
};

export default Header;
