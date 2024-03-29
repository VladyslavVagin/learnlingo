import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenuList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 28px;
`

export const NavigationLink = styled(NavLink)`
  line-height: 1.25;
  color: var(--dark-color);
  font-size: 16px;
  font-weight: 400;

  &.active {
    border-bottom: 2px solid var(--accent-color);
  }
`;
