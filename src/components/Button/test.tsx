import { screen } from '@testing-library/react';
import { MdAddShoppingCart } from 'react-icons/md';
import Button from '.';
import { renderWithTheme } from '../../utils/test/helpers';

describe('<Button/>', () => {
  it('Should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>);
    // const { container } = render(<Button />);

    expect(
      screen.getByRole('button', {
        name: /Buy Now/i,
      }),
    ).toHaveStyle({
      padding: '0.8rem 3.2rem',
      height: '4rem',
      'font-size': '1.4rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render the small size', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>);
    // const { container } = render(<Button />);

    expect(
      screen.getByRole('button', {
        name: /Buy Now/i,
      }),
    ).toHaveStyle({
      padding: '0.8rem',
      height: '3rem',
      'font-size': '1.2rem',
    });
  });
  it('Should render the large size.', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>);
    // const { container } = render(<Button />);

    expect(
      screen.getByRole('button', {
        name: /Buy Now/i,
      }),
    ).toHaveStyle({
      padding: '0.8rem 4.8rem',
      height: '5rem',
      'font-size': '1.6rem',
    });
  });
  it('Should render the fullwidth size', () => {
    renderWithTheme(<Button fullWidth>Buy Now</Button>);
    // const { container } = render(<Button />);

    expect(
      screen.getByRole('button', {
        name: /Buy Now/i,
      }),
    ).toHaveStyle({
      width: '100%',
    });
  });

  it('Should render an icon version', () => {
    renderWithTheme(
      <Button icon={<MdAddShoppingCart data-testid="icon" />}>Buy Now</Button>,
    );

    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
