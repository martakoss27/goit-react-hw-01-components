import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead>
      <tr className={css.tableHead}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={css.tableBody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={css.tableRow}>
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
