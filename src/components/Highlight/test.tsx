import { render, screen } from '@testing-library/react';

import Highlight from '.';

describe('<Highlight/>', () => {
  it('Should render the heading', () => {
    const { container } = render(<Highlight />);

    expect(
      screen.getByRole('heading', {
        name: /Highlight/i,
      }),
    );

    expect(container?.firstChild).toMatchSnapshot();
  });
});
