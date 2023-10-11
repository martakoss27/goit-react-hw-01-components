import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem/FriendsItem';

export const Friends = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, name, avatar, isOnline }) => (
      <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
