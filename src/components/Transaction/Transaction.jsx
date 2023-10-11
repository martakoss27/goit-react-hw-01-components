import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className="table">
    <thead>
      <tr className="tableHead">
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className="tableBody">
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className="tableRow">
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
