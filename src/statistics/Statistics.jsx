import PropTypes from "prop-types";
import s from './StatisticsStyles.module.css';

const Statistics = ({ statistic, title }) => {
    return (
        <section className={s.stats}>
            {title && <h2 className="title">{title}</h2>}

            <ul className={s.statList}>
            
                {statistic.map(({ id, label, percentage }) => (
                    <li className={s.item} key={id} style={{ backgroundColor: '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase() }}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}</span>
                    </li>
                ))}
            
            </ul>
        </section>
    );
};

Statistics.propTypes = {
 statistic: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title:PropTypes.string,
};



export default Statistics;