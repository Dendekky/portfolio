import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { useSpring, useTrail, animated } from 'react-spring'
// import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'

const HomePageTemplate = ({
  title,
  heading,
  description,
  // offerings,
  meta_title,
  meta_description,
  // testimonials,
}) => {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  const config = { mass: 5, tension: 2000, friction: 200 }
  const [toggle, setToggle] = useState(true)
  const items = description.split('.')
  // console.log(items)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 20,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero bg-hero is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-12'>
                <div className='section'>
                  <h1 className='title primary-text has-text-centered'>
                    {title}
                  </h1>
                  <h1 className='has-text-centered is-size-4 has-text-white'>Software Developer</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>

          <div className='section'>
            <div className='columns'>
              {/* <div> */}
              <animated.div
                className='card column is-6'
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              />
              <div className='content column is-6'>
                <h3 className='has-text-weight-semibold is-size-2 has-text-white'>
                  {heading}
                </h3>
                {/* <div className='trails-main' onClick={() => setToggle(state => !state)}>
                  <div>
                    {trail.map(({ x, height, ...rest }, index) => (
                      <animated.div
                        key={items[index]}
                        className='trails-text has-text-white'
                        style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                        <animated.div style={{ height }}>{items[index]}</animated.div>
                      </animated.div>
                    ))}
                  </div>
                </div> */}
                <div>
                  <h3 className='has-text-weight-semibold is-size-2 has-text-white'>
                    {heading}
                  </h3>
                  <p className='has-text-white'>{description}</p>
                </div>
                {/* <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  // offerings: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // testimonials: PropTypes.array,

}

export default HomePageTemplate
