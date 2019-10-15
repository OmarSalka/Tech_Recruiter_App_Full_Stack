import React from 'react';
import Features from '../../gitApp/about/Features';
import Contact from '../../gitApp/about/Contact';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const FadeInDown = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;

const About = () => {
  return (
    <div id='about' className='container'>
      <Features />
      <hr className='divider' />
      <FadeInDown>
        <p className='indent-features'>
          <i className='fas fa-caret-right'></i> Search Potential Candidates'
          Github account with the most valuable metrics displayed in a very
          convenient way
        </p>
        <p className='indent-features'>
          <i className='fas fa-caret-right'></i> Add the potential condidate to
          your directory
        </p>
        <p className='indent-features'>
          <i className='fas fa-caret-right'></i> Revisit your directory with all
          the saved profiles for comparisons
        </p>
        <p className='indent-features'>
          <i className='fas fa-caret-right'></i> In case of a no match, you can
          delete a candidate's profile from your directory
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '4rem',
            marginBottom: '4rem'
          }}
        >
          <i className='fab fa-github fa-10x' style={{ opacity: '0.5' }}></i>
        </div>
      </FadeInDown>
      <Contact />
      <p>
        <strong>App:</strong>v. 1.0.0
      </p>
      <p>
        <strong>Author:</strong> Omar Salka
      </p>
    </div>
  );
};

export default About;
