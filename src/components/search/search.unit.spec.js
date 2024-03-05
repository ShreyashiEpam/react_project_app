import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from './search.js';

describe('SearchComponent', () => {
  let mockOnSearch;

  beforeEach(() => {
    mockOnSearch = jest.fn();
  });

  it('renders input and button', () => {
    
    const { getByRole } = render(<SearchComponent onSearch={mockOnSearch} />);
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('initializes state correctly', () => {
    const { getByRole } = render(<SearchComponent onSearch={mockOnSearch} />);
    const input = getByRole('textbox');
    expect(input.value).toBe('');
  });

  it('updates state on input change', () => {
    const { getByRole } = render(<SearchComponent onSearch={mockOnSearch} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('calls onSearch prop when button is clicked', () => {
    const { getByRole } = render(<SearchComponent onSearch={mockOnSearch} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnSearch).toHaveBeenCalled();
  });

  it('calls onSearch prop when Enter key is pressed', () => {
    const { getByRole } = render(<SearchComponent onSearch={mockOnSearch} />);
    const input = getByRole('textbox');
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    expect(mockOnSearch).toHaveBeenCalled();
  });

  it('does not call onSearch prop when other keys are pressed', () => {
    const { getByRole } = render(<SearchComponent onSearch={mockOnSearch} />);
    const input = getByRole('textbox');
    fireEvent.keyPress(input, { key: 'A', code: 65, charCode: 65 });
    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
