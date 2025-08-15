import { render, screen } from '@testing-library/react';

import Footer from '.';

describe('<Footer/>', () => {
  it('Should render the heading', () => {
    const { container } = render(<Footer />);

    expect(
      screen.getByRole('heading', {
        name: /Footer/i,
      }),
    );

    expect(container?.firstChild).toMatchSnapshot();
  });
});
