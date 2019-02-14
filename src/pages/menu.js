import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection";
import Menu from "../components/menu/Menu";



const MenuPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection img={data.img.childImageSharp.fluid} 
    title="Menu" subtitle="Our special menu for lovers like you!" styleClass="half-background" />
    <Menu items={data.menu} />

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
  },
  menu:allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        price
        category
        image {
          fixed(width: 100, height:100) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        description {
          description
        }
      }
    }
  }
}
`

export default MenuPage
