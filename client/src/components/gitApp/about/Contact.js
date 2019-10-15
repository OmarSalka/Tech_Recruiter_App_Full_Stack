import React from 'react';
import 'animate.css/animate.min.css';

const Contact = () => {
  return (
    <div id='section3' className='about-contact'>
      <div className='section3ContactUs'>
        <div className='contactItem'>
          <h2>Contact Us</h2>
          <hr />
          <p>
            <a href={`mailto:omarsalka9@gmail.com`}>
              omarsalka9@gmail.com <i className='fas fa-envelope fa-1x'></i>
            </a>
          </p>
        </div>
        <div className='contactItem'>
          <h2>Stay Updated</h2>
          <hr />
          <div className='socialMedia'>
            <a
              href='https://www.instagram.com/omar_inst_/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-2x'></i>
            </a>{' '}
            <a
              href='https://www.linkedin.com/in/omarsalka/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin fa-2x'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
