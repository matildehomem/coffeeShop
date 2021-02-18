import React from "react";
import Product from "./Product";
import Title from "../globals/Title";
import { StaticQuery, graphql } from "gatsby";

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function ProductsList() {
  return (
    <div>
      <StaticQuery
        query={getProducts}
        render={(data) => {
          return (
            <section className="py-5">
              <div className="container">
                <Title title="Products List" />
                <div className="row">
                  {data.products.edges.map(({ node: product }) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </div>
            </section>
          );
        }}
      />
    </div>
  );
}
