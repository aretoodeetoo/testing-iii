// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should say locked if locked', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);
        const keyhole = getByText(/locked/i);
        expect(keyhole).toBeTruthy();
    })
})