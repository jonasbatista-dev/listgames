'use client';
import styled, { css } from 'styled-components';
import { LogoProps } from '.';

const modifiers = {
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  hideOnMobile: () => css`
    @media (max-width: 768px) {
      width: 5.8rem;
      svg {
        width: 5.8rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    }
  `,
};

const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && modifiers[size]}
    ${hideOnMobile && modifiers.hideOnMobile}
  `}
`;

export { Wrapper };
