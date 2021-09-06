import PropTypes from "prop-types";
import s from './FriendListStyles.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {
        friends.map(({ id, avatar, name, isOnline }) => (
          <li className={s.item} key={id} >
            <span className={isOnline ? s.green : s.red}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};

export default FriendList;