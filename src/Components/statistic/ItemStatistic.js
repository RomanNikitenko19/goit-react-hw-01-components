import React from 'react';
import PropTypes from 'prop-types';

const ItemStatistic = ({data}) => {
     console.log(data);
     return (
          <li className="item">
               <span className="label">{data.label}</span>
               <span className="percentage">{data.percentage}%</span>
          </li>
     );
};

export default ItemStatistic;

ItemStatistic.propTypes = {
     data: PropTypes.object.isRequired,
};