import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const Statistics = ({ stats, title }) => {
  return (
    <>
      <section className={style.statistics}>
        <div className={style.conteiner}>
          <h2 className={style.title}>{title}</h2>

          <ul className={style.list}>
            {stats.map(({ id, label, percentage }) => {
              return (
                <li key={id} className={style.item}>
                  <span className={style.span}>{label}</span>
                  <span className={style.span}>{percentage}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired
};

export default Statistics;