import React, { useEffect, useContext } from 'react';

import GithubContext from '../../../Context/Github/githubContext';
import CandidateContext from '../../../Context/Candidate/candidateContext';
import AuthContext from '../../../Context/Authentication/authContext';
import PopUpContext from '../../../Context/PopUp/popUpContext';

import Repos from '../profile/Repos';
import PopUp from '../candidates/PopUp';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeIn } from 'react-animations';

import { Link } from 'react-router-dom';

const FadeIn = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;
const FadeInLeft = styled.div`
  animation: 1s ${keyframes`${fadeInLeft}`};
`;

const UserProfile = ({ match }) => {
  const popUpContext = useContext(PopUpContext);
  const { addCandidatePopUp } = popUpContext;

  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  const candidateContext = useContext(CandidateContext);
  const { checkIfCandidate, isCandidate } = candidateContext;

  const githubContext = useContext(GithubContext);
  const {
    id,
    login,
    avatar_url,
    bio,
    company,
    email,
    followers,
    following,
    hireable,
    html_url,
    location,
    name,
    public_gists,
    public_repos
  } = githubContext.user;

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getRepos(match.params.login);
    loadUser();
    if (id) checkIfCandidate(id);
    console.log(isCandidate);
    // eslint-disable-next-line
  }, [id, isCandidate]);

  const addCandidate = () => {
    addCandidatePopUp(name, id, login);
  };

  return (
    <FadeInLeft>
      <FadeIn>
        <PopUp />
      </FadeIn>
      <div className='container' style={{ display: 'flex' }}>
        <Link
          to='/gitapp'
          className='btn btn-primary'
          style={{ alignItems: 'left' }}
        >
          Back
        </Link>
      </div>
      <div className='container profileCard'>
        <div className='cardElement1'>
          <div className='topCardElement'>
            {/* <div className='add-to-directory' onClick={addCandidate}> */}
            {/* if user doesn't exist in directoy then display add to directory */}
            {isCandidate === true ? (
              <div className='added-to-directory'>
                <i className='fas fa-check-circle fa-fw fa-2x'></i>
                <p> Added!</p>
              </div>
            ) : (
              <div className='add-to-directory' onClick={addCandidate}>
                <i className='fas fa-plus-circle fa-fw'></i>
                <p> Add to Directory</p>
              </div>
            )}

            {/* else, display a check icon with "added" */}
            {/* </div> */}
            <p className='hide-mobile-item hireable-mobile'>
              <span
                style={{
                  fontWeight: 'bold',
                  marginLeft: '1.5rem',
                  marginBottom: '1rem',
                  color: '#333'
                }}
              >
                Hireable:{' '}
              </span>{' '}
              {hireable ? (
                <i className='fas fa-check' style={{ color: '#388f83' }}></i>
              ) : hireable === false ? (
                <i className='fas fa-times' style={{ color: '#dc3545' }}></i>
              ) : (
                <i className='fas fa-question' style={{ color: 'grey' }}></i>
              )}
            </p>
            <h1>{name ? name : login}</h1>
            <img
              src={avatar_url}
              alt='Oops'
              style={{
                borderRadius: '80%',
                width: '40%',
                marginRight: 'none'
              }}
            />
            <a
              className='btn btn-primary btn-hover'
              style={{ borderRadius: 5 }}
              href={html_url}
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Profile
            </a>
          </div>
          <hr style={{ border: '1px solid #d6d1d1', margin: '1rem' }} />
          <div className='bottomCardElement'>
            <p style={{ textAlign: 'left' }}>
              <strong>Bio:</strong> <br />
              {bio ? bio : 'N/A'}
            </p>
            <p>
              <strong>Email:</strong> <br />
              {email ? (
                <a href={`mailto:${email}`} style={{ color: 'blue' }}>
                  {email}{' '}
                  <i
                    className='fas fa-envelope fa-1x'
                    style={{ color: '#388f83' }}
                  ></i>
                </a>
              ) : (
                'N/A'
              )}
            </p>
            <p>
              <strong>Company:</strong> <br />
              {company ? company : 'N/A'}
            </p>
            <p>
              <strong>Location:</strong> <br />
              {location ? location : 'N/A'}
            </p>
          </div>
        </div>
        <hr
          className='hide-mobile-item'
          style={{
            border: '1px solid #d6d1d1',
            margin: '1rem',
            marginBottom: '0rem'
          }}
        />
        <div className='cardElements cardElement2'>
          <div className='profileStats'>
            <p>
              <span
                style={{
                  fontWeight: 'bold',
                  marginLeft: '1.5rem',
                  marginBottom: '1rem',
                  color: '#333'
                }}
              >
                Hireable:{' '}
              </span>{' '}
              {hireable ? (
                <i className='fas fa-check' style={{ color: '#388f83' }}></i>
              ) : hireable === false ? (
                <i className='fas fa-times' style={{ color: '#dc3545' }}></i>
              ) : (
                <i className='fas fa-question' style={{ color: 'grey' }}></i>
              )}
            </p>
            <div className='userQuantifiedInfo'>
              <p style={{ background: '#32CD32' }}>
                <span>Followers:</span> {followers}
              </p>
              <p style={{ background: '#FF4500' }}>
                <span>Following:</span> {following}
              </p>
              <p style={{ background: '#000' }}>
                <span>Public Gists:</span> {public_gists}
              </p>
              <p style={{ background: '#0000FF' }}>
                <span>Public Repos:</span> {public_repos}
              </p>
            </div>
          </div>
          <h1
            style={{
              textAlign: 'left',
              marginLeft: '1.5rem',
              marginTop: '1rem',
              marginBottom: '1rem'
            }}
          >
            <strong style={{ fontSize: '2rem' }}>Repos:</strong>
          </h1>
          <Repos />
        </div>
      </div>
    </FadeInLeft>
  );
};

export default UserProfile;
