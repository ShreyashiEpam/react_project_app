import React from 'react';

const SortControl = ({ currentSelection, onSelectionChange }) => {
  const handleSelectionChange = (e) => {
    const newValue = e.target.value;
    onSelectionChange(newValue);
  };

  return (
    <div className="sort-control">
      <label htmlFor="sort-by">Sort by:</label>
      <select id="sort-by" value={currentSelection} onChange={handleSelectionChange}>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
