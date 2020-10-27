import React from 'react'
import PropTypes from 'prop-types'
import PortfolioPageTemplate from '../../components/PortfolioPageTemplate'

const PricingPagePreivew = ({ entry, getAsset }) => {
  const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  const entryProjects = entry.getIn(['data', 'projects'])
  const projects = entryProjects ? entryProjects.toJS() : []

  return (
    <PortfolioPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      portfolio={{
        heading: entry.getIn(['data', 'portfolio', 'heading']),
        description: entry.getIn(['data', 'portfolio', 'description']),
        plans: pricingPlans,
      }}
      projects={projects}
    />
  )
}

PricingPagePreivew.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PricingPagePreivew
