import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';

import Highlight from '.';
import { Content } from './styles';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg',
};

describe('<Highlight/>', () => {
  it('Should render background image', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', {
        name: /heading 1/i,
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: /heading 2/i,
      }),
    );

    expect(
      screen.getByRole('link', {
        name: /Buy now/i,
      }),
    );
  });

  it('Should render the headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });

  it('Should render Float Image', () => {
    renderWithTheme(
      <Highlight {...props} floatImage="/img/red-dead-img.jpg" />,
    );

    expect(
      screen.getByRole('img', {
        name: props.title,
      }),
    ).toHaveAttribute('src', '/img/red-dead-img.jpg');
  });

  it('Should render align Right by default', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} floatImage="/img/red-dead-img.jpg" />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      `'floatImage content'`,
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${Content}`,
    });
  });

  it('Should render align left', () => {
    const { container } = renderWithTheme(
      <Highlight
        {...props}
        floatImage="/img/red-dead-img.jpg"
        alignment="left"
      />,
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      `'content floatImage'`,
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${Content}`,
    });
  });
});
