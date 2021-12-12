import propTypes from "prop-types";
import styles from "./Transactions.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.list}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.row} key={id}>
              <td className={styles.td}>{type}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = { items: propTypes.array };
