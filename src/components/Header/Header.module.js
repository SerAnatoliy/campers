import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 64px;
  border-bottom: 3px solid #e44848;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 30px;
  font-weight: 600;
  color: #101828;
`;
export const ListNav = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin-left: auto;
`;

export const ListItem = styled.li`
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #e44848;
  }
`;

export const ItemsLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 600px;
`;

export const SpanName = styled.span`
  color: #e44848;
`;
