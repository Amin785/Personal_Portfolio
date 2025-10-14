import React from 'react'
import UIDesign from './../../assets/ui-design.png'
import WebDesign from './../../assets/website-design.png'
import AppDesign from './../../assets/app-design.png'
import Embeded from './../../assets/embeded.webp'
import './Skills.css'
import { motion } from "motion/react"

const Skills = () => {
  return (
    <motion.section 
       initial={{opacity: 0, x:-100}} 
       transition={{duration: 1.5}}
       whileInView={{opacity: 1, x:0}}
       viewport={{once: true}}




        id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>
          I'm skilled and passionate web designer with experience in building modern, responsive web applications using React and Node.js, develop embedded systems with microcontrollers like ESP32 and Arduino, and create IoT solutions that connect devices with cloud services and data-driven interfaces.  
        </span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={UIDesign} alt='UIDesign' className='skillbarImg' />
                <div className='skilbarText'>
                    <h2>UI/UX Design</h2>
                    <p>Crafting visually appealing interfaces and seamless user experiences.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src= {WebDesign} alt='WebDesign' className='skillbarImg' />
                <div className='skilbarText'>
                    <h2>Web Design</h2>
                    <p>Creating responsive and modern websites using HTML, CSS, JavaScript, React and Node.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={AppDesign} alt='AppDesign' className='skillbarImg' />
                <div className='skilbarText'>
                    <h2>App Design</h2>
                    <p>Designing intuitive mobile and desktop applications with smooth user experiences.</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src= {Embeded} alt='Embeded' className='skillbarImg' />
                <div className='skilbarText'>
                    <h2>Embeded System</h2>
                    <p>Programming microcontrollers like ESP32 and Arduino for smart devices.</p>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Skills
