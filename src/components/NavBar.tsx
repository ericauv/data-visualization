import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Info } from '../icons/info-circle-solid.svg';
import { IconSection } from './Banner';
import NavMenu from './NavMenu';
interface INavSectionProps {
  sideOfNav: 'right' | 'left';
}

const NavBarStyles = styled.div`
  color: white;
  background: ${props => props.theme.colors[0]};
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;
const NavSection = styled.div<INavSectionProps>`
  ${props =>
    props.sideOfNav === 'right' ? `margin-left: auto;` : `margin-right:auto;`}
  display:flex;
  height: 100%;
  width: 100%;
`;

const NavBar = () => {
  return (
    <NavBarStyles className="nav-bar">
      <NavSection className="nav-section nav-section-left" sideOfNav="left">
        <NavMenu></NavMenu>
      </NavSection>
      <NavSection className="nav-section nav-section-right" sideOfNav="right">
        <IconSection className="icon-section" alignCenter height="100%">
          <Info className="icon-button no-fill" height="50%"></Info>
        </IconSection>
      </NavSection>
    </NavBarStyles>
  );
};

export default NavBar;
