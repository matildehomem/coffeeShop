import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { StaticQuery, graphql } from "gatsby";

import Product from "./Product";
import Title from "../globals/Title";

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct(
      filter: { node_locale: { eq: "en" } }
    ) {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default function ProductsList() {
  const intl = useIntl();

  return (
    <div>
      <StaticQuery
        query={getProducts}
        render={(data) => {
          return (
            <section className="py-5">
              <div className="container">
                <Title
                  title={intl.formatMessage({
                    id: "products_list",
                    defaultMessage: "Products List",
                  })}
                />
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
