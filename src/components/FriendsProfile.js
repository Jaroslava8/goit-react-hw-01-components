import PropTypes from "prop-types";
import styles from "./Friends.module.css";
export function FriendsProfile({ avatar, name, isOnline }) {
  return (
    <li className={styles.list}>
      <span className={isOnline ? styles.friendOnline : styles.friendoffLine}>
        {isOnline}
      </span>
      <img
        className={styles.image}
        src={avatar}
        alt={"User avatar"}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsProfile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
