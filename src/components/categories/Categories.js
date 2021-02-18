import React from "react";

const Categories = ({ categories, handleItems }) => {
  return (
    <div className="row mb-5">
      <div className="col-10 mx-auto text-center">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className="btn btn-yellow text-capitalize m-3"
              onClick={() => {
                handleItems(category);
              }}>
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
