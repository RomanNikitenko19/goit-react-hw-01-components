import React from 'react';
import ItemStatistic from './ItemStatistic';
import PropTypes from 'prop-types';

const Statistic = ({data, title}) => {
     console.log(data);
     // const labelArr = data.map( data => data.label);
     // console.log(labelArr);
     // const percentageArr = data.map( data=> data.percentage);
     // console.log(percentageArr);
     return (
          <section className="statistics">
     {title && <h2 className="title">{title}</h2>}

     <ul className="stat-list">
          {data.map(data=><ItemStatistic key={data.id} data={data} />)}
     </ul>
</section>
     );
};

export default Statistic;

Statistic.propTypes = {
     data: PropTypes.array.isRequired,
     title: PropTypes.string
};