import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import ProductsList from "../components/shop/ProductsList";

const ShopPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Shop"
      subtitle="Our special menu for lovers like you!"
      styleClass="half-background"
    />
    <ProductsList />
  </Layout>
);
export const query = graphql`
  {
    img: file(relativePath: { eq: "header_bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ShopPage;
