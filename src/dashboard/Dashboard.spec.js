// Test away

import React from 'react';
import { render } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should render successfully', () => {
        const { getByText } = render(<Dashboard />);
    })
})