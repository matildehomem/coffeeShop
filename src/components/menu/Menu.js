import React, { Component } from "react";
import Title from "../globals/Title";
import Categories from "../categories/Categories";
import MenuItems from "../menuItem/MenuItems";

const getCategories = (items) => {
  let tempItems = items.map((items) => {
    return items.node.category;
  });
  let tempCategories = new Set(tempItems); //single instance of categories
  let categories = Array.from(tempCategories);
  categories = ["all", ...categories]; //add 'all' category
  return categories;
};

export default class Menu extends Component {
  state = {
    items: this.props.items.edges, //query
    coffeeItems: this.props.items.edges, //render
    categories: getCategories(this.props.items.edges),
  };

  handleItems = (category) => {
    let tempItems = [...this.state.items];
    if (category === "all") {
      this.setState({
        coffeeItems: tempItems,
      });
    } else {
      let items = tempItems.filter(({ node }) => node.category === category);
      this.setState({
        coffeeItems: items,
      });
    }
  };
  render() {
    const { categories, items, coffeeItems } = this.state;
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="Our Menu" />
          <Categories categories={categories} handleItems={this.handleItems} />
        </div>
        <MenuItems items={items} coffeeItems={coffeeItems} />
      </section>
    );
  }
}
