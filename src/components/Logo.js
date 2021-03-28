/** @jsx jsx */
import { jsx } from "theme-ui"
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Logo = () => {
  return (
    <div
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        variant: 'styles.header',
        fontSize: 2,
        mx: 'auto',
      }}
    >
      <StaticImage
        src="../images/logo-leurjim.png"
        alt="Logo leurjim"
        placeholder="blurred"
        layout="fixed"
        width={65}
        height={50}
      />
    </div>
  )
}

export default Logo
