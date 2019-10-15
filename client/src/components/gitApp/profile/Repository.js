import React from 'react';
import PropTypes from 'prop-types';

const Repository = ({ repo }) => {
  const { name, description, clone_url } = repo;
  return (
    <div className='repo'>
      <strong style={{ fontSize: '1.4rem' }}>{name} :</strong>
      <p style={{ fontSize: 14 }}>{description}</p>
    </div>
  );
};

Repository.propTypes = {
  repo: PropTypes.object.isRequired
};

export default Repository;
