import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <div>
            <a
              href="https://wa.me/2349035119138?text=Hi%20Ibrahim,%20I'd%20like%20to%20discuss%20with%20you"
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='whatsapp'
                src={require('../../assets/icons/whatsapp.svg')}
              />
            </a>
            <a
              href='https://www.github.com/dendekky'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='github'
                src={require('../../assets/icons/github.svg')}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/dendekky'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='linkedin'
                src={require('../../assets/icons/linkedin.svg')}
              />
            </a>
            <a
              href='https://www.twitter.com/dendekky'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                alt='twitter'
                src={require('../../assets/icons/twitter.svg')}
              />
            </a>
          </div>
          <p>
            {config.copyright}
          </p>
          <p>Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.netlifycms.org'>Netlify CMS</a> | <a href='https://github.com/Dendekky/portfolio'>Github Repository</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
