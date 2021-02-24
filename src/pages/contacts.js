import React from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Contact from "../components/contacts/Contact";

const IndexPage = ({ data }) => {
  const intl = useIntl();

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={intl.formatMessage({
          id: "contacts",
          defaultMessage: "Contacts",
        })}
        subtitle={intl.formatMessage({
          id: "subtitle_contacts",
          defaultMessage: "A Lot Can Happen Over Coffee!",
        })}
        styleClass="half-background"
      />

      <Contact />
    </Layout>
  );
};

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

export default IndexPage;
