import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme) => css`
    border-left: 0.7rem solid ${theme.colors.secondary};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: ' ';
      position: absolute;
      bottom: -1rem;
      left: 0px;
      width: 5rem;
      height: 0.7rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `,
};

const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};

    @media (max-width: 768px) {
      font-size: ${theme.font.sizes.xlarge};
    }

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`;

export { Wrapper };
