import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li><Link to="/page-2/">Go to page 2</Link></li>
      <li><Link to="/blog/2018-04-12-test/">Go to a blog page</Link></li>
    </ul>
  </div>
)

export default IndexPage
