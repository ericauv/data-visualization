import React, { useState } from 'react';
import styled from 'styled-components';
import NavMenuItem from './NavMenuItem';

const NavMenuStyles = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  height: 100%;
`;

const menuItems = [{ label: 'Usage' }, { label: 'Services' }];

const NavMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <nav style={{ marginLeft: '20px' }}>
      <NavMenuStyles>
        {menuItems.map((item, index) => (
          <NavMenuItem
            key={`nav-menu-item-${index}`}
            index={index}
            label={item.label}
            active={activeIndex === index}
            setActiveIndex={setActiveIndex}
          />
        ))}
      </NavMenuStyles>
    </nav>
  );
};

export default NavMenu;
