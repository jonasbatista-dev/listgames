import {
  CreateAccount,
  IconWrapper,
  LogoWrapper,
  MenuFull,
  MenuGroup,
  MenuLink,
  MenuNav,
  RegisterBox,
  Wrapper,
} from './styles';

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2';
import {
  Search as SearchIcon,
  Close as CloseIcon,
  ShoppingCart,
} from '@styled-icons/material-outlined';

import Logo from '../../components/Logo';
import { useState } from 'react';
import Button from '../Button';
import MediaMatch from '../MediaMatch';

export type Props = {
  username?: string;
};

const Menu = ({ username }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <MediaMatch lessThan="medium">
        <IconWrapper>
          <MenuIcon onClick={() => setIsOpen(true)} aria-label="Open Menu" />
        </IconWrapper>
      </MediaMatch>
      <LogoWrapper>
        <Logo hideOnMobile />
      </LogoWrapper>

      <MediaMatch greaterThan="medium">
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
        </MenuNav>
      </MediaMatch>

      <MenuGroup>
        <IconWrapper>
          <SearchIcon aria-label="Search" />
        </IconWrapper>
        <IconWrapper>
          <ShoppingCart aria-label="Shopping Cart" />
        </IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign In </Button>
          </MediaMatch>
        )}
      </MenuGroup>
      <MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon onClick={() => setIsOpen(false)} aria-label="Close Menu" />
        <MenuNav>
          <MenuLink href="#">Home</MenuLink>
          <MenuLink href="#">Explore</MenuLink>
          {!!username && (
            <>
              <MenuLink href="#">My account</MenuLink>
              <MenuLink href="#">Wishlist</MenuLink>
            </>
          )}
        </MenuNav>
        {!username && (
          <RegisterBox>
            <Button fullWidth size="large">
              Log in Now
            </Button>
            <span>or</span>
            <CreateAccount href="#" title="Sign Up">
              Sign Up
            </CreateAccount>
          </RegisterBox>
        )}
      </MenuFull>
    </Wrapper>
  );
};

export default Menu;
