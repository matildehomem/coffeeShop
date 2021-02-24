import React from "react";
import { graphql } from "gatsby";
import { FormattedMessage, useIntl, Link } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from "../components/home/Info";
import Cta from "../components/globals/Cta";
import Offer from "../components/home/Offer";

const IndexPage = ({ data }) => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title={intl.formatMessage({
          id: "title_label",
          defaultMessage: "Coffee Lovers",
        })}
        subtitle={intl.formatMessage({
          id: "subtitle_label",
          defaultMessage: "A Lot Can Happen Over Coffee",
        })}
        styleClass="default-background">
        <Link to="/shop">
          <button className="btn mt-5 btn-yellow">
            <FormattedMessage id="go_shop_page" defaultMessage="Go to shop" />
          </button>
        </Link>
      </BackgroundSection>
      <Info />
      <Cta />
      <Offer />
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
