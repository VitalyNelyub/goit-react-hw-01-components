import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.list}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            <span
              className={css.status}
              style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
            >
              {friend.isOnline}
            </span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendsList.propType = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
