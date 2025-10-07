import React from 'react' 
import './Intro.css';
import bg from './../../assets/image.png'
import btnImg from './../../assets/hireme.png'
import { motion } from "motion/react";

const Intro = () => {
  return (
    <motion.section 
       initial={{opacity: 0, x:500}} 
       transition={{duration: 5}}
       whileInView={{opacity: 1, x:0}}
       viewport={{once: true}}


    
        id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Amin</span> <br />Computer Engineer</span>
            <p className='introPara'>
                I'm a skilled web designer with experience in creating <br /> visually appealing and user friendly websites
            </p>
            <a 
              href='https://t.me/nure37'  
              target='_blank' 
              rel='noopener noreferrer'
            >
                <button className='btn'>
                  <img src={btnImg} alt='Hire me' className='btnImg'/>
                  Hire Me
                </button>
            </a>
        </div>

        <img src={bg} alt='Profile' className='bg' />
    </motion.section>
  )
}

export default Intro;
