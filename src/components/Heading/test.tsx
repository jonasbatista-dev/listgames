import { screen } from '@testing-library/react';

import Heading from '.';
import { renderWithTheme } from '../../utils/test/helpers';

describe('<Heading/>', () => {
  it('should render a label by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });
  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="white">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa',
    });
  });
  it('should render a label by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517',
    });
  });
  it('should render a heading with a line to left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': `0.7rem solid #F231A5`,
    });
  });
  it('should render a heading with a line to bottom side', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      `0.5rem solid #F231A5`,
      {
        modifier: '::after',
      },
    );
  });
  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem',
    });
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      `3rem`,
      {
        modifier: '::after',
      },
    );
  });
  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineBottom lineLeft>
        Won Games
      </Heading>,
    );
    const heading = screen.getByRole('heading', { name: /Won Games/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});
