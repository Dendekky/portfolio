import React from 'react'
import PropTypes from 'prop-types'

const Projects = ({ gridItems }) => (
  <div className='columns is-multiline' style={{ marginTop: '28px' }}>
    {gridItems.map(item => (
      <div key={item.text} className='column is-12' style={{ borderRadius: '5px', marginBottom: '32px', border: '1px solid #eaecee', padding: '2em 4em' }}>
        <div className='columns'>
          <p className='column is-5'>{item.text}</p>
          <p className='has-text-centered'>
            <img alt={item.text} src={item.image} />
          </p>
        </div>
        <div className='buttons are-small'>
          {item.previewLink ? <a className='button is-outlined is-primary' href={item.previewLink}>View Live</a> : null}
          {item.sourceCode ? <a className='button' href={item.sourceCode}>Source Code</a> : null}
        </div>
      </div>
    ))}
  </div>
)

Projects.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
      previewLink: PropTypes.string,
      sourceCode: PropTypes.string,
    }),
  ),
}

export default Projects
