import { screen } from '@testing-library/react';

import Menu from '.';
import { renderWithTheme } from '@/utils/test/helpers';

describe('<Menu/>', () => {
  it('Should render the menu', () => {
    renderWithTheme(<Menu />);
  });
});
