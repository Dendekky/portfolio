import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

// const location = useLocation()
// const transitions = useTransition(location, location => location.pathname, { ... })
// return transitions.map(({ item, props, key }) => (
//   <animated.div key={key} style={props}>
//     <Switch location={item}>
//       <Route path="/a" component={A} />
//       <Route path="/b" component={B} />
//       <Route path="/c" component={C} />
//     </Switch>
//   </animated.div>
// ))

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Ibrahim Adeniyi</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item' to='/about'>
              About
            </Link>
            <Link className='navbar-item' to='/portfolio'>
              Projects
            </Link>
            <Link className='navbar-item' to='/blog'>
              Blog
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contact'>
                    Contact Me
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
