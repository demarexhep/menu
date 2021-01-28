import React from "react";

const Categories = ({ categories, filterMenuItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterMenuItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
