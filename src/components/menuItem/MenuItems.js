import React from "react";
import MenuItem from "./MenuItem";

const MenuItems = ({ items, coffeeItems }) => (
  <div className="row">
    <div className="col-10 col-sm6 mx-auto text-center text-capitalize">
      {items.length ? (
        coffeeItems.map(({ node }) => {
          return <MenuItem item={node} />;
        })
      ) : (
        <h5>No items to display</h5>
      )}
    </div>
  </div>
);

export default MenuItems;