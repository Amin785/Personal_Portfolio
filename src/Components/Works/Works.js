import React, { useState } from 'react'
import './Works.css'
import portfolio1 from './../../assets/portfolio-1.png'
import portfolio2 from './../../assets/portfolio-2.png'
import portfolio3 from './../../assets/portfolio-3.png'
import portfolio4 from './../../assets/portfolio-4.png'
import portfolio5 from './../../assets/portfolio-5.png'
import portfolio6 from './../../assets/portfolio-6.png'
import portfolio7 from './../../assets/portfolio-7.png'
import { motion } from 'motion/react'

const Works = () => {
  const [showAll, setShowAll] = useState(false)

  const projects = [
    { img: portfolio1, link: 'https://github.com/Amin785/Scientific-calculator' },
    { img: portfolio2, link: 'https://github.com/Amin785/Weather-App' },
    { img: portfolio3, link: 'https://github.com/Amin785/e-commerce-store' },
    { img: portfolio4, link: 'https://github.com/Amin785/Wireless-BLDC-Motor-Controller' },
    { img: portfolio5, link: 'https://github.com/Amin785/Personal_Portfolio' },
    { img: portfolio6, link: 'https://github.com/Amin785/real-estate-website' },
    { img: portfolio7, link: 'https://github.com/Amin785/to-do-list' }
  ]

  // Show only first 6 if not expanded
  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <motion.section
      id='works'
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className='workstitle'>My Projects</h2>
      <span className='workDes'>
        I take pride in crafting pixel-perfect designs with meticulous attention to detail.
        My goal is to combine creativity with functionality, helping businesses achieve their objectives while building a strong and lasting online presence.
      </span>

      <div className='workImgs'>
        {visibleProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={project.img} alt={`Project ${index + 1}`} className='workImg' />
          </a>
        ))}
      </div>

      {/* Show button only if there are hidden projects */}
      {projects.length > 6 && (
        <div
          className='worksBtn'
          onClick={() => setShowAll(!showAll)}
          style={{ cursor: 'pointer' }}
        >
          {showAll ? 'See Less' : 'See More'}
        </div>
      )}
    </motion.section>
  )
}

export default Works
