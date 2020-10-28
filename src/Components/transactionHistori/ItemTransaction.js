import React from 'react';
import PropTypes from 'prop-types';

const ItemTransaction = ({type, amount, currency}) => {
     return (
          <tr>
               <td>{type}</td>
               <td>{amount}</td>
               <td>{currency}</td>
          </tr>
     );
};

export default ItemTransaction;

ItemTransaction.propTypes = {
     type: PropTypes.string.isRequired,
     amount: PropTypes.string.isRequired,
     currency: PropTypes.string.isRequired,
};