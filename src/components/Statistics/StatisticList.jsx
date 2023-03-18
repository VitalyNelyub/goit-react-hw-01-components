import PropTypes from 'prop-types';
import css from '../Statistics/StatisticsList.module.css';

export const StatisticList = ({ title, statistic }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {statistic.map(item => (
          <li key={item.id} className={css.item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticList.propType = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
