import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from "../components/home/Info";
import Cta from "../components/globals/Cta";
import Offer from "../components/home/Offer";
import { Link } from 'gatsby'


const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="Coffee for Lovers" subtitle="A Lot Can Happen Over Coffee, Its Awesome!!!" 
    styleClass="default-background" 
    children={ <Link to="/shop"><button className="btn mt-5 btn-yellow" >Go to Shop </button></Link>} />
    <Info />
    <Cta />
    <Offer />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath: {eq: "header_bg.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default IndexPage
