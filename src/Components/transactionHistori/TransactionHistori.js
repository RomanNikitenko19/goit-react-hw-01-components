import React from "react";
import ItemTransaction from "./ItemTransaction";
import PropTypes from 'prop-types';

const TransactionHistori = ({data}) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
          {data.map(data=><ItemTransaction key={data.id} type={data.type} amount={data.amount} currency={data.currency} />)}
      </tbody>
    </table>
  );
};

export default TransactionHistori;

TransactionHistori.propTypes = {
    data: PropTypes.array.isRequired,
};


