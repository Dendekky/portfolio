import React from 'react'
import Helmet from 'react-helmet'
import Projects from '../Portfolio'
import PropTypes from 'prop-types'

const PortfolioPageTemplate = ({
  title,
  meta_title,
  meta_description,
  portfolio,
  projects,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    {/* <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <div className='container'>
      <div className='section'>
        <div className='content'>
          <h2 className='has-text-weight-semibold is-size-2'>
            {portfolio.heading}
          </h2>
          <p className='is-size-5'>{portfolio.description}</p>
          <Projects gridItems={projects} />
        </div>
      </div>
    </div>
  </div>
)

PortfolioPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default PortfolioPageTemplate
