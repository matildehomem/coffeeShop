import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";

import Title from "../globals/Title";
import Categories from "../categories/Categories";
import MenuItems from "../menuItem/MenuItems";

const Menu = ({ items }) => {
  const intl = useIntl();

  const [coffeeItems, setCoffeeItems] = useState(items.edges);

  const getCategories = (items) => {
    let tempItems = items.map((items) => {
      return items.node.category;
    });
    let tempCategories = new Set(tempItems); //single instance of categories
    let categories = Array.from(tempCategories);
    categories = ["all", ...categories]; //add 'all' category
    return categories;
  };

  const handleItems = (category) => {
    let tempItems = [...items.edges];
    if (category === "all") {
      setCoffeeItems(tempItems);
    } else {
      let items = tempItems.filter(({ node }) => node.category === category);
      setCoffeeItems(items);
    }
  };

  return (
    <section className="menu py-5">
      <div className="container">
        <Title
          title={intl.formatMessage({
            id: "menu_title",
            defaultMessage: "Our Menu",
          })}
        />
        <Categories
          categories={getCategories(items.edges)}
          handleItems={handleItems}
        />
      </div>
      <MenuItems coffeeItems={coffeeItems} />
    </section>
  );
};
export default Menu;
