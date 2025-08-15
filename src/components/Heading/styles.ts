import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps, LineColors } from '.';
import media from 'styled-media-query';

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};

      `}/* @media (max-width: 768px) {
      font-size: ${theme.font.sizes.xlarge};
    } */
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    border-left: 0.7rem solid ${theme.colors[lineColor]};
    padding-left: ${theme.spacings.xxsmall};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: ' ';
      position: absolute;
      bottom: -1rem;
      left: 0px;
      width: 5rem;
      height: 0.7rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,
};

const Wrapper = styled.h2.withConfig({
  shouldForwardProp: (prop) =>
    !['color', 'lineLeft', 'lineBottom', 'size', 'lineColor'].includes(prop),
})<HeadingProps>`
  ${({
    theme,
    color,
    lineLeft,
    lineBottom,
    size,
    lineColor = 'primary',
  }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;

export { Wrapper };
