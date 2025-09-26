import React, { useRef } from 'react'
import './Contacts.css'
import Microsoft from './../../assets/microsoft.png'
import FacebookIcon from './../../assets/facebook-icon.png'
import TwitterIcon from './../../assets/twitter.png'
import TelegramIcon from './../../assets/telegram.png'
import InstagramIcon from './../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s6vjmni',     // Your Service ID
        'template_lz8lxdg',    // Your Template ID
        form.current,
        'm2viE_qEd3HVckwKj' // Your Public Key
      )
      .then(
        () => {
          alert('Email sent successfully!');
          form.current.reset(); // clear the form
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <section id='contactPages'>
      <div id='client'>
        <h1 className='clientPagetitle'>My Internship</h1>
        <p className='contacPageDes'>
          I have had the opportunity to intern at the Ministry of Innovation and Technology of Ethiopia, 
          where I contributed to projects in web development and embedded systems.
        </p>
        <div className='clientImgs'>
          <img src={Microsoft} alt='Microsoft Logo' className='clientImg' />
        </div>
      </div>

      <div id='contact'>
        <h1 className='clientPagetitle'>Contact Me</h1>
        <span className='contactDes'>
          Please fill out the form below to discuss any work opportunities.
        </span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' placeholder='Your Name' className='name' required />
          <input type='email' name='user_email' placeholder='Your Email' className='email' required />
          <textarea name='message' placeholder='Your Message' className='msg' rows='5' required></textarea>
          <button type='submit' className='submitbtn'>Submit</button>
    <div className='links'>
    <a href='https://t.me/nure37' target='_blank' rel='noopener noreferrer'>
    <img src={TelegramIcon} alt='Telegram' className='link' />
  </a>
  <a href='https://www.instagram.com/lij_amin_gel/' target='_blank' rel='noopener noreferrer'>
    <img src={InstagramIcon} alt='Instagram' className='link' />
  </a>
  <a href='https://www.facebook.com/Amin Galato/' target='_blank' rel='noopener noreferrer'>
    <img src={FacebookIcon} alt='Facebook' className='link' />
  </a>
  <a href='https://twitter.com/YourTwitterUsername' target='_blank' rel='noopener noreferrer'>
    <img src={TwitterIcon} alt='Twitter' className='link' />
  </a>
</div>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
