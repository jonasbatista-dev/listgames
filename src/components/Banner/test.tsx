import { screen } from '@testing-library/react';

import Banner from '.';
import { renderWithTheme } from '../../utils/test/helpers';

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('<Banner/>', () => {
  it('Should render the currectly', () => {
    const { container } = renderWithTheme(<Banner {...props} />);
    expect(container.firstChild).toMatchSnapshot();
    //title
    expect(
      screen.getByRole('heading', { name: /Defy death/i }),
    ).toBeInTheDocument();
    //subtitle
    expect(
      screen.getByRole('heading', {
        name: 'Play the new CrashLands season',
      }),
    ).toBeInTheDocument();
    //imagem
    expect(
      screen.getByRole('img', { name: /Defy death/i }),
    ).toBeInTheDocument();
  });

  it('Should render a Ribbon', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Best Seller"
        ribbonSize="small"
        ribbonColor="secondary"
      />,
    );
    const ribbon = screen.getByText(/Best Seller/i);
    expect(ribbon).toHaveStyle({ 'background-color': '#3CD3C1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', 'font-size': '1.2rem' });
  });
});
