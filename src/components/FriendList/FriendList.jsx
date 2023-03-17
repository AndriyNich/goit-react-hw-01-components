import PropTypes from 'prop-types';

import { Wraper, Friend, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <Wraper>
      {friends.map(friend => {
        console.log(friend['avatar']);
        return (
          <Friend key={friend['id']}>
            <Status isOnline={friend['isOnline'] || false} />
            <Avatar src={friend['avatar']} alt="User avatar" width="48" />
            <Name>{friend['name']}</Name>
          </Friend>
        );
      })}
    </Wraper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool,
    })
  ),
};
