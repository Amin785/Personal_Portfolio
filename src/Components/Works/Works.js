import React from 'react'
import './Works.css'
import portfolio1 from './../../assets/portfolio-1.png'
import portfolio2 from './../../assets/portfolio-2.png'
import portfolio3 from './../../assets/portfolio-3.png'
import portfolio4 from './../../assets/portfolio-4.png'
import portfolio5 from './../../assets/portfolio-5.png'
import portfolio6 from './../../assets/portfolio-6.png'
import portfolio7 from './../../assets/portfolio-7.png'
import { motion } from 'motion/react'
import { link } from 'motion/react-client'

const Works = () => {
  const projects = [
    { img: portfolio1, link: 'https://github.com/Amin785/Scientific-calculator' },
    { img: portfolio2, link: 'https://github.com/Amin785/Weather-App' },
    { img: portfolio3, link: 'https://github.com/Amin785/e-commerce-store' },
    { img: portfolio4, link: 'https://github.com/Amin785/Wireless-BLDC-Motor-Controller' },
    { img: portfolio5, link: 'https://github.com/Amin785/Personal_Portfolio' },
    { img: portfolio6, link: 'https://github.com/Amin785/real-estate-website' },
    {img: portfolio7, link: 'https://github.com/Amin785/to-do-list'}
  ];

  return (
    <motion.section 
       initial={{opacity: 0, x:500}} 
       transition={{duration: 5}}
       whileInView={{opacity: 1, x:0}}
       viewport={{once: true}}
      
      
      
      id='works'>
      <h2 className='workstitle'>My Projects</h2>
      <span className='workDes'>
        I take pride in crafting pixel-perfect designs with meticulous attention to detail. 
        My goal is to combine creativity with functionality, helping businesses achieve their objectives while building a strong and lasting online presence.
      </span>
      <div className='workImgs'>
        {projects.map((project, index) => (
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
      <div className='worksBtn'>See More</div>
    </motion.section>
  )
}

export default Works

