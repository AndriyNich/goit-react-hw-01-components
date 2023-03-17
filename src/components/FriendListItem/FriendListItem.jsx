import PropTypes from 'prop-types';

import { Friend, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <Friend>
      <Status isOnline={friend['isOnline'] || false} />
      <Avatar src={friend['avatar']} alt="User avatar" width="48" />
      <Name>{friend['name']}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
  }),
};
