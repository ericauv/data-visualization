import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface IProps {
  active: boolean;
  label: string;
  index: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

const NavMenuItemStyles = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  list-style: none;
  padding: none;
  margin: none;
  margin-right: 20px;
  cursor: pointer;
  span {
    font-weight: 200;
    text-decoration: none;
    color: white;
  }
  span.nav-menu-label-active {
    font-weight: 700;
  }
  &.nav-menu-item-active:after {
    content: '';
    position: absolute;
    top: 80%;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid white;
  }
`;

const NavMenuItem: React.FC<IProps> = props => {
  const { active, label, index, setActiveIndex } = props;
  console.log(index, active);

  return (
    <NavMenuItemStyles
      className={`nav-menu-item ${active ? 'nav-menu-item-active' : ''}`}
      onClick={() => setActiveIndex(index)}
    >
      {
        <span className={`${active ? 'nav-menu-label-active' : ''}`}>
          {label}
        </span>
      }
    </NavMenuItemStyles>
  );
};

export default NavMenuItem;
