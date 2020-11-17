import React from 'react';
import { render } from '@testing-library/react';

import AirflyLanguage from './airfly-language';

describe('AirflyLanguage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AirflyLanguage />);
    expect(baseElement).toBeTruthy();
  });
});
