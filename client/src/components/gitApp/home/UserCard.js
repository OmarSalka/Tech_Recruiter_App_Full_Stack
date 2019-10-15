import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CandidateContext from '../../../Context/Candidate/candidateContext';

const UserCard = ({ user: { login, id } }) => {
  const candidateContext = useContext(CandidateContext);
  const { checkIfCandidate } = candidateContext;

  const onClick = () => {
    checkIfCandidate(id);
  };

  return (
    <div className='userCard'>
      <p style={{ marginBottom: '0.5rem' }}>
        <strong style={{ fontFamily: 'Acme' }}>{login}</strong>
      </p>
      <Link
        to={`/gitapp/user/${login}`}
        className='btn btn-primary btn-primary-hover'
        style={customBtn}
        onClick={onClick}
      >
        Profile
      </Link>
    </div>
  );
};

const customBtn = {
  display: 'inline-block',
  padding: '0.1rem 0.5rem',
  fontSize: '1rem',
  borderRadius: '5px',
  margin: '0 auto'
};
export default UserCard;
