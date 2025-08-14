import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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

export { Wrapper, IconWrapper, LogoWrapper, MenuGroup };
