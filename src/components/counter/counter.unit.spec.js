import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './counter.js'

describe("Counter component tests", () => {
    it("testing initial value of counter", () => {
        const { getByText } = render(<Counter initialValue={0} />);
        expect(getByText('Value: 0')).toBeInTheDocument();
    });
});