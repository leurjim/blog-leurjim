import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO tile={`404 Page`} />
      <div>El gran vacío. Está página no trabaja.</div>
    </Layout>
  )
}

export default NotFoundPage
