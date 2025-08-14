import { IconWrapper, LogoWrapper, MenuGroup, Wrapper } from './styles';

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import {
  Search as SearchIcon,
  ShoppingCart,
} from '@styled-icons/material-outlined';

import Logo from '../../components/Logo';

const Menu = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <MenuIcon aria-label="Open Menu" />
      </IconWrapper>

      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCart aria-label="Shopping Cart" />
        </IconWrapper>
      </MenuGroup>
    </Wrapper>
  );
};

export default Menu;
