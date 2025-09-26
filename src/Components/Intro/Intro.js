import React from 'react' 
import './Intro.css';
import bg from './../../assets/image.png'
import btnImg from './../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello, </span>
            <span className='introText'>I'm <span className='introName'>Amin</span> <br />Electrical and Computer Engineer</span>
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
    </section>
  )
}

export default Intro;
