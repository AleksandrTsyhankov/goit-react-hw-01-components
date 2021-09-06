import PropTypes from "prop-types";
import s from './TransactionHistoryStyles.module.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <table className={s.transactionHistory}>
        <thead>
            <tr className={s.tableHead}>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        {transactions.map(({ id, type, amount, currency }) => (
            <thead key={id}>
                <tr className={s.tableItem}>
                    <th>{type}</th>
                    <th>{amount}</th>
                    <th>{currency}</th>
                </tr>
            </thead>
        ))}
    </table>
    );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  )
};



export default TransactionHistory;