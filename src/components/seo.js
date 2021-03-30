import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, imageAlt, meta = [] }) => {
  const { site } = useStaticQuery(
    graphql` 
      {
        site {
          siteMetadata {
            description
            title
            twitter
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = image || site.siteMetadata.description

  const imageUrl = `${site.siteMetadata.siteUrl}${image}`
  return (
    <Helmet
      title={title}
      htmlAttributes={{lang: `es`}}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title, 
        },
        {
          property: `og:description`,
          content: metaDescription, 
        },
        {
          property: `og:type`,
          content: `website`, 
        },
        {
          property: `twitter:title`,
          content: title, 
        },
        {
          property: `twitter:creater`,
          content: site.siteMetadata.twitter || ``, 
        },
        {
          property: `twitter:description`,
          content: metaDescription, 
        },

      ]
      .concat(
        image 
          ? [
            {
              name: `og:image`,
              content: imageUrl,
            },
            {
              name: `og:image:alt`,
              content: imageAlt || title,
            },
            {
              name: `twitter:image`,
              content: imageUrl,
            },
            {
              name: `twitter:image:alt`,
              content: imageAlt || title,
            },
            {
              property: `twitter:card`,
              content: `summary_large_image`, 
            },
          ] 
          : [
              {
                property: `twitter:card`,
                content: `summary`, 
              },
            ]
      )
      .concat(meta)
    }
    />
  )
}

export default SEO
