import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type Breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  greaterThan?: Breakpoint;
  lessThan?: Breakpoint;
};

const createMediaMatchModifiers = () => ({
  lessThan: (size: Breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,
  greaterThan: (size: Breakpoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `,
});

const mediaMatchModifiers = createMediaMatchModifiers();

const MediaMatch = styled.div.withConfig({
  shouldForwardProp: (prop) => !['greaterThan', 'lessThan'].includes(prop),
})<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;

export default MediaMatch;
