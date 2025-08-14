import { screen } from '@testing-library/react';
import 'jest-styled-components';
import Logo from '.';
import { renderWithTheme } from '../../utils/test/helpers';

describe('<Logo/>', () => {
  it('Should render a white label by default', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/LOGO/i).parentElement).toHaveStyle({
      color: '#FaFaFa',
    });
  });
  it('Should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);

    expect(screen.getByLabelText(/LOGO/i).parentElement).toHaveStyle({
      color: '#030517',
    });
  });

  it('Should render a normal logo', () => {
    renderWithTheme(<Logo />);

    expect(screen.getByLabelText(/LOGO/i).parentElement).toHaveStyle({
      width: '11rem',
    });
  });
  it('Should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />);

    expect(screen.getByLabelText(/LOGO/i).parentElement).toHaveStyle({
      width: '20rem',
    });
  });

  // it('Should render a bigger logo without text if hideOnMobile', () => {
  //   renderWithTheme(<Logo hideOnMobile={true} />);

  //   expect(screen.getByLabelText(/LOGO/i).parentElement).toHaveStyleRule(
  //     'width',
  //     '5.8rem',
  //     {
  //       media: '(max-width: 768px)',
  //     },
  //   );
  // });
});
