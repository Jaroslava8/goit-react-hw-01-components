import PropTypes from "prop-types";
import styles from "./Profile.module.css";

export default function Users(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div>
      <div className={styles.profile}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.username}>{tag}</p>
        <p className={styles.username}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.list}>
          <span className={styles.stat}>Followers</span>
          <span className={styles.stat}>{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.stat}>Views</span>
          <span className={styles.stat}>{stats.views}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.stat}>Likes</span>
          <span className={styles.stat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
Users.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  stats: PropTypes.object.isRequired,
};

/////////////////////////////
