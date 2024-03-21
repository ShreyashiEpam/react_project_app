import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from './sortControl.js';

describe('SortControl component', () => {
  it('renders sort control correctly', () => {
    const { getByLabelText } = render(<SortControl currentSelection="releaseDate" />);
    
    expect(getByLabelText('Sort by:')).toBeInTheDocument();
    expect(getByLabelText('Sort by:')).toHaveValue('releaseDate');
  });

  it('calls onSelectionChange when selection changes', () => {
    const onSelectionChange = jest.fn();
    const { getByLabelText } = render(<SortControl currentSelection="releaseDate" onSelectionChange={onSelectionChange} />);
    const selectElement = getByLabelText('Sort by:');

    fireEvent.change(selectElement, { target: { value: 'title' } });
    
    expect(onSelectionChange).toHaveBeenCalledWith('title');
  });
});
