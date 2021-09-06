import PropTypes from "prop-types";
import s from './ProfileStyles.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt={name}
                    className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span className={s.label}>Followers: </span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className={s.label}>Views: </span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li>
                    <span className={s.label}>Likes: </span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};



export default Profile;