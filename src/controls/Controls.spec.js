// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('Control panel', () => {
    it('renders lock button', () => {
        const { getByText } = render(<Controls />);
        const lockButton = getByText(/lock gate/i);  
        expect(lockButton).toHaveTextContent(/lock gate/i);
    })
});