import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PortfolioPageTemplate from '../components/PortfolioPageTemplate'
import Layout from '../components/Layout'

const PortFolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PortfolioPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        portfolio={frontmatter.portfolio}
        projects={frontmatter.projects}
      />
    </Layout>
  )
}

PortFolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PortFolioPage

export const portFolioPageQuery = graphql`
  query PortFolioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        portfolio {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
        projects {
          image
          text
          previewLink
          sourceCode
        }
      }
    }
  }
`
