import React from 'react';
import { render } from '@testing-library/react';

import AirflyProvider from './airfly-provider';

describe('AirflyProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AirflyProvider />);
    expect(baseElement).toBeTruthy();
  });
});
