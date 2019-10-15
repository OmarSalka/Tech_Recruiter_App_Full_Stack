import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css/animate.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

const LandingSection2 = () => {
  return (
    <div id='section2'>
      <div className='section2Content container'>
        <ScrollAnimation
          animateIn='fadeIn'
          animateOut='fadeOut'
          animateOnce={true}
        >
          <h1>Everything a tech recruiter needs</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='fadeIn'
          animateOut='fadeOut'
          delay={100}
          animateOnce={true}
        >
          <p style={{ margin: '1rem 0' }}>
            Make your hiring more productive and efficient with the best
            designed tech hiring tool
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='fadeInLeft'
          animateOut='fadeOutDown'
          delay={200}
          duration={2}
          animateOnce={true}
        >
          <div className='features'>
            <div className='featureItem'>
              <i className='far fa-folder-open fa-3x'></i>
              <div style={{ textAlign: 'left' }}>
                <h4>Mini Github Profiles</h4>
                <p>
                  Github profiles with all the information a tech recruiter
                  looks for in a candidate
                </p>
              </div>
            </div>
            <div className='featureItem'>
              <i
                className='fas fa-mobile-alt fa-3x'
                style={{ paddingLeft: '1.7rem', paddingRight: '1.7rem' }}
              ></i>
              <div style={{ textAlign: 'left' }}>
                <h4>Responsive Design</h4>
                <p>
                  This app is designed to be user friendly accross all devices
                </p>
              </div>
            </div>
            <div className='featureItem'>
              <i className='fas fa-magic fa-3x'></i>
              <div style={{ textAlign: 'left' }}>
                <h4>Interactive UI</h4>
                <p>
                  Designed to keep the user engaged using state of the art UI
                  tech, principles, and standards
                </p>
              </div>
            </div>
            <div className='featureItem'>
              <i
                className='fas fa-save fa-3x'
                style={{ paddingLeft: '1.2rem', paddingRight: '1.2rem' }}
              ></i>
              <div style={{ textAlign: 'left' }}>
                <h4>Save Candidate Profiles</h4>
                <p>Save a potential candidate's profile for later</p>
              </div>
            </div>
            <div className='featureItem'>
              <i className='fab fa-wpexplorer fa-3x'></i>
              <div style={{ textAlign: 'left' }}>
                <h4>Explore other profiles</h4>
                <p>Explore other Github Users' profiles for some raw talent</p>
              </div>
            </div>
            <div className='featureItem'>
              <i className='fas fa-sign-in-alt fa-3x'></i>
              <div style={{ textAlign: 'left' }}>
                <h4>Unique Features</h4>
                <p>
                  Create an account to access all the unique features we offer
                </p>
              </div>
            </div>
          </div>
          <div style={{ margin: '3rem 0' }}>
            <ScrollAnimation
              animateIn='fadeIn'
              animateOut='fadeOut'
              delay={100}
              animateOnce={true}
            >
              <h1>
                <i className='fas fa-quote-left'></i> It's a great app! Haven't
                seen anything like it!
              </h1>
              <p style={{ textAlign: 'center' }}>- Omar Salka</p>
              <h2 style={{ margin: '1rem 0rem' }}>
                So what are you waiting for?
              </h2>
              <Link
                to='/auth/login'
                className='theLoginButton'
                style={{ background: '#f4f4f4' }}
              >
                <span style={{ color: '#333' }}>
                  Login <i className='fas fa-sign-in-alt'></i>
                </span>
              </Link>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default LandingSection2;
