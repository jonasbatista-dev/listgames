import { screen } from '@testing-library/react';

import Menu from '.';
import { renderWithTheme } from '../../utils/test/helpers';

describe('<Menu/>', () => {
  it('Should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
  });
});
