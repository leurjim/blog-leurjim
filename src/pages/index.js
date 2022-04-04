/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <SEO title={`Home Page`} />
      <ul
        sx={{
          listStyle: 'none',
          m: 0,
          px: 3,
          py: 4,
        }}>
        {posts.map((post) => {
          return (
            <li
              key={post.slug}
              sx={{
                mb: 4,
              }}>
              <h2
                sx={{
                  m: 0,
                }}>
                <Link 
                  to={post.slug}
                  sx={{
                    color: '#d23669',
                    textDecoration: 'none',
                    ':hover,:focus': {
                      color: 'primary',
                    },
                  }}>
                  {post.frontmatter.title}
                </Link>
              </h2>
                <small sx={{ fontWeight: 'bold' }}>{post.frontmatter.date}</small>
              <p
                sx={{
                  m: 0,
                }}>
                {post.excerpt}
              </p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
{
  allMdx (sort: {fields: [frontmatter___date], order: ASC}) {
    nodes {
      slug
      frontmatter {
        title
        date
      }
      excerpt
    }
  }
}
`

export default IndexPage
