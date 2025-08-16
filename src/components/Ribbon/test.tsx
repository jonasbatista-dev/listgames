import { screen } from '@testing-library/react';

import Ribbon from '.';
import { renderWithTheme } from '../../utils/test/helpers';

describe('<Ribbon/>', () => {
  it('Should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>);

    expect(screen?.getByText(/Best Seller/i)).toBeInTheDocument();
  });
  it('Should render with the primary color', () => {
    renderWithTheme(<Ribbon color="primary">Best Seller</Ribbon>);

    expect(screen?.getByText(/Best Seller/i)).toHaveStyle(
      'background-color: #F231A5',
    );
  });
  it('Should render with the normal size as default', () => {
    renderWithTheme(<Ribbon color="primary">Best Seller</Ribbon>);

    expect(screen?.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem',
    });
  });
  it('Should render with the small size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>);

    expect(screen?.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem',
    });
  });
});
