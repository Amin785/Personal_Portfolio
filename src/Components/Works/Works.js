import React from 'react'
import './Works.css'
import portfolio1 from './../../assets/portfolio-1.png'
import portfolio2 from './../../assets/portfolio-2.png'
import portfolio3 from './../../assets/portfolio-3.png'
import portfolio4 from './../../assets/portfolio-4.png'
import portfolio5 from './../../assets/portfolio-5.png'
import portfolio6 from './../../assets/portfolio-6.png'

const Works = () => {
  const projects = [
    { img: portfolio1, link: 'https://github.com/your-username/project1' },
    { img: portfolio2, link: 'https://github.com/your-username/project2' },
    { img: portfolio3, link: 'https://github.com/your-username/project3' },
    { img: portfolio4, link: 'https://github.com/your-username/project4' },
    { img: portfolio5, link: 'https://github.com/your-username/project5' },
    { img: portfolio6, link: 'https://github.com/your-username/project6' },
  ];

  return (
    <section id='works'>
      <h2 className='workstitle'>My Portfolio</h2>
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
    </section>
  )
}

export default Works

