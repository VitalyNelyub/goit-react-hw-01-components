// import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import { Friend } from '../FriendList/Friend';

export const FriendsList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.list}>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </div>
  );
};
