import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundSection({ img, styleClass, title, subtitle, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="text-center">
        <h1 className="title mt-5 display-3 text-white">{title}</h1>
        <br />
        <h6 className="blockquote text-white">{subtitle}</h6>
        {children}
      </div>
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "Kaffee Name",
  styleClass: "default-background"
}