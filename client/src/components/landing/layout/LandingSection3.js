import React from 'react';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const LandingSection3 = () => {
  return (
    <div id='section3'>
      <div className='container'>
        <ScrollAnimation
          animateIn='fadeIn'
          animateOut='fadeOut'
          delay={100}
          animateOnce={true}
        >
          <div className='section3ContactUs'>
            <div className='contactItem'>
              <h2>Contact Us</h2>
              <hr />
              <p>
                <a
                  href={`mailto:omarsalka9@gmail.com`}
                  style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                >
                  omarsalka9@gmail.com{' '}
                  <i
                    className='fas fa-envelope fa-1x'
                    style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                  ></i>
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
                  <i
                    className='fab fa-instagram fa-2x'
                    style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                  ></i>
                </a>{' '}
                <a
                  href='https://www.linkedin.com/in/omarsalka/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i
                    className='fab fa-linkedin fa-2x'
                    style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '3rem', marginBottom: '1rem' }}>
            <p>
              Copyright {'\u00A9'} 2019, Social Media Finder, All Rights
              Reserved
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default LandingSection3;
