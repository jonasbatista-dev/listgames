import styled from 'styled-components';
import { HighlightProps } from '.';

type WrapperProps = Pick<HighlightProps, 'backgroundImage' | 'alignment'>;

const wrapperModifiers = {
  left: () => `
    grid-template-areas: 'content floatImage';
     grid-template-columns: 2fr 1.3fr;
    ${Content} {
      text-align: left;
    }

    ${FloatImage} {
    justify-self: end;
    }
  `,
  right: () => `
    grid-template-areas: 'floatImage content';

    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `,
};

const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage, alignment }) => `
    position: relative;
    height: 23rem;
    display: grid;

   ${!!alignment && wrapperModifiers[alignment]()}

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center center;


    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);

    }


    @media (min-width: 768px) {
      height: 32rem;
}

  `}
`;

const Subtitle = styled.h3`
  ${({ theme }) => `
    margin-bottom: ${theme.spacings.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.small};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.medium};
    }

  `}
`;
const Title = styled.h2`
  ${({ theme }) => `
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
     font-weight: ${theme.font.bold};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;
const Content = styled.div`
  ${({ theme }) => `

    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    grid-area: content;

    @media (min-width: 768px) {
      align-self: end;
      padding: ${theme.spacings.large};
    }

  `}
`;

const FloatImage = styled.img`
  ${({ theme }) => `
    position: absolute;
    grid-area: floatImage;
    align-self: end;
    max-height: 18rem;
    z-index: ${theme.layers.base};
    @media (min-width: 768px) {
      max-height: 32rem;
    }

  `}
`;

export { Wrapper, Subtitle, Title, Content, FloatImage };
