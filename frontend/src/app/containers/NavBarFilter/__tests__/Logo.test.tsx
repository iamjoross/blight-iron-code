import React from 'react';
import { render } from '@testing-library/react';
import { Logo } from '../components/Logo';

describe('<Logo />', () => {
  it('should match snapshot', () => {
    const logo = render(<Logo />);
    expect(logo.container.firstChild).toMatchSnapshot();
  });
});
