import PropTypes from 'prop-types';

export const Friends = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ id, name, avatar, isOnline }) => (
      <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);
const FriendsItem = ({ id, name, avatar, isOnline }) => (
  <li class="item" key={id}>
    <span class="status">{isOnline}</span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
  </li>
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
