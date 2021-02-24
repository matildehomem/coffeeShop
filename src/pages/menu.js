import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Menu from "../components/menu/Menu";

const MenuPage = ({ data }) => {
  const intl = useIntl();
  let dataMenu;
  intl.locale === "en" ? (dataMenu = data.menuEN) : (dataMenu = data.menuPT);

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={intl.formatMessage({
          id: "menu",
          defaultMessage: "Menu",
        })}
        subtitle={intl.formatMessage({
          id: "subtitle_menu",
          defaultMessage: "Our special menu for lovers like you!",
        })}
        styleClass="half-background"
      />
      <Menu items={dataMenu} />
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "header_bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    menuEN: allContentfulCoffeeItem(filter: { node_locale: { eq: "en" } }) {
      edges {
        node {
          id
          title
          price
          category
          image {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
          description {
            description
          }
        }
      }
    }
    menuPT: allContentfulCoffeeItem(filter: { node_locale: { eq: "pt" } }) {
      edges {
        node {
          id
          title
          price
          category
          image {
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed
            }
          }
          description {
            description
          }
        }
      }
    }
  }
`;

export default MenuPage;
