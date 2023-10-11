import PropTypes from 'prop-types';
import css from '../FriendsItem/friendsItem.module.css';

export const FriendsItem = ({ id, name, avatar, isOnline }) => (
  <li className={css.item} key={id}>
    <span className={isOnline ? css.online : css.offline}>@</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendsItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
