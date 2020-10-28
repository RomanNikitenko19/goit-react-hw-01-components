import React from 'react';
import PropTypes from 'prop-types';
import style from './Friends.module.css';

const FrendItem = ({avatar, name, isOnline}) => {
     return (
          <li className={style.item}>
          <span className={[style.status, isOnline ? style.isOn : style.isOff].join(' ')}></span>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
          </li>
     );
};

export default FrendItem;

FrendItem.propTypes = {
     avatar: PropTypes.string.isRequired,
     name: PropTypes.string.isRequired,
     isOnline: PropTypes.bool.isRequired,
};