import styled, { css } from 'styled-components';
import * as HeadingStyles from '../Heading/styles';
import media from 'styled-media-query';

const Wrapper = styled.footer`
  ${HeadingStyles.Wrapper} {
    text-transform: uppercase;
  }
`;

const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
     grid-template-columns: repeat(4, 1fr)
    `}
  `}
`;
const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`;
const CopyRight = styled.div`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-family: ${theme.font.family};
    text-align: center;
  `}
`;

export { Wrapper, Column, Content, CopyRight };
