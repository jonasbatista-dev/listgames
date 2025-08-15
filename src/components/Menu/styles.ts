import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type MenuFullProps = {
  isOpen: boolean;
};

const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`;

const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    `}
`;

const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;
    gap: ${theme.spacings.xsmall};
  `}
`;

const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    height: 2.4rem;
    width: 2.4rem;
  `}
`;

const MenuFull = styled.nav<MenuFullProps>`
  ${({ isOpen, theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    background-color: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 100vh;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }

    ${MenuNav} {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${RegisterBox} {
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};`}
  `}
`;
const MenuLink = styled.a`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.primary};
        animation: hoverAnimation 0.2s forwards;
      }

      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`;

export const RegisterBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 ${theme.spacings.xlarge} ${theme.spacings.xlarge};

    > span {
      display: block;
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;

const CreateAccount = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color: ${theme.colors.primary};
    border-bottom: 0.2rem solid ${theme.colors.primary};
  `}
`;

export {
  Wrapper,
  IconWrapper,
  LogoWrapper,
  MenuGroup,
  MenuFull,
  MenuLink,
  MenuNav,
  CreateAccount,
};
