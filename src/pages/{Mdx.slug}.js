/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import SEO from "../components/seo"

const BlogPostPage = ({ data }) => {
  const post = data.mdx
  const image = getImage(post.frontmatter.image)
  const seoImage = getSrc(post.frontmatter.image)
  return (
    <Layout>
      <article>
        <SEO title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={seoImage}
        imageAlt={post.frontmatter.imageAlt}
        />
        <GatsbyImage 
          image={image}
          alt={post.frontmatter.imageAlt}
          sx={{
            m: 2,
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
          }}
        />
        <h1 
          sx={{
            textAlign: 'center',
            fontSize: '1.75rem'
          }}
        >
          {post.frontmatter.title}
        </h1>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        imageAlt
      }
      body
    }
  }
`

export default BlogPostPage