import PropTypes from "prop-types";

export default function Statistics(title, stats) {
  return (
    <section className="a">
      <h2 className="title">{title}</h2>

      <ul className="b">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className="m">
              <span className="label"> {label} </span>
              <span className="percentage"> {percentage} </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
