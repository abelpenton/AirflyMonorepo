import React from 'react';
import { render } from '@testing-library/react';

import AirflyTheme from './airfly-theme';

describe('AirflyTheme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AirflyTheme />);
    expect(baseElement).toBeTruthy();
  });
});
