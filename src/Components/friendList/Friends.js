import React from 'react';
import FrendItem from './FrendItem';
import PropTypes from 'prop-types';

const Friends = ({data}) => {
     console.log(data);
     return (
          <ul className="friend-list">
               {data.map(data=><FrendItem key={data.id} avatar={data.avatar} name={data.name} isOnline={data.isOnline}/>)}
          </ul>
     );
};

export default Friends;

Friends.propTypes = {
     data: PropTypes.array.isRequired,
};