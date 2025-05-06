import { render, screen } from '@testing-library/react';

import Heading from '.';

describe('<Heading/>', () => {
  it('Should render the heading', () => {
    const { container } = render(<Heading />);

    expect(
      screen.getByRole('heading', {
        name: /Heading/i,
      }),
    );

    expect(container?.firstChild).toMatchSnapshot();
  });
});
