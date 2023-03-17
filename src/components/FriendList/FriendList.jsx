import PropTypes from 'prop-types';

import { Wraper } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Wraper>
      {friends.map(friend => {
        return <FriendListItem friend={friend} key={friend['id']} />;
      })}
    </Wraper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
