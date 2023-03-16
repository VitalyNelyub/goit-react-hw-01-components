import PropTypes from 'prop-types';
import css from '../Transactions/Transactions.module.css';

export const Transactions = ({ transactions }) => {
  return (
    <div>
      <table className={css.transactions}>
        <thead>
          <tr className={css.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type.toUpperCase()}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Transactions.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
