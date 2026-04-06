import 'jest-styled-components';
import GameCard from './';
import { renderWithTheme } from '../../utils/test/helpers';
import theme from '../../styles/theme';
import { fireEvent, screen } from '@testing-library/react';

const defaultProps = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/red-dead-img.jpg',
  price: '$235.00',
};

describe('<GameCard />', () => {
  it('should render heading, developer and image', () => {
    renderWithTheme(<GameCard {...defaultProps} />);

    expect(
      screen.getByRole('heading', { name: /population zero/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /rockstar games/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: defaultProps.title }),
    ).toHaveAttribute('src', defaultProps.img);

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price as label (without line-through)', () => {
    renderWithTheme(<GameCard {...defaultProps} />);

    const price = screen.getByText('$235.00');

    expect(price).toBeInTheDocument();

    expect(price).not.toHaveStyleRule('text-decoration', 'line-through');

    expect(price).not.toHaveStyleRule('color', theme.colors.secondary);
  });

  it('should render promotional price with line-through in original price', () => {
    renderWithTheme(<GameCard {...defaultProps} promotionalPrice="$200.00" />);

    const originalPrice = screen.getByText('$235.00');
    const promotionalPrice = screen.getByText('$200.00');

    expect(originalPrice).toHaveStyleRule('text-decoration', 'line-through');

    expect(promotionalPrice).not.toHaveStyleRule(
      'text-decoration',
      'line-through',
    );
  });

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...defaultProps} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument();
  });

  it('should call onFav method when favorite is cliecked', () => {
    const onFav = jest.fn();

    renderWithTheme(<GameCard {...defaultProps} onFav={onFav} favorite />);
    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(onFav).toHaveBeenCalled();
  });

  it('should render with ribbon', () => {
    const ribbon: string = '20% OFF';
    renderWithTheme(<GameCard {...defaultProps} ribbon={ribbon} />);

    expect(screen.getByText(ribbon)).toBeInTheDocument();
  });
});
