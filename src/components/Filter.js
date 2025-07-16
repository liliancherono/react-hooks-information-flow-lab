import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <select value={selectedCategory} onChange={e => onCategoryChange(e.target.value)}>
      <option value="All">All</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;
