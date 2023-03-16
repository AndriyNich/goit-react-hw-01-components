import PropTypes from 'prop-types';

export const Profile = ({ userdata }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userdata;
  return (
    <div>
      <div>
        <img src={avatar} alt={username} />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>
      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userdata: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};

/* <div class="profile">
<div class="description">
  <img src={avatar} alt={username} class="avatar" />
  <p class="name">{username}</p>
  <p class="tag">{tag}</p>
  <p class="location">{location}</p>
</div>
<ul class="stats">
  <li>
    <span class="label">Followers</span>
    <span class="quantity">{followers}</span>
  </li>
  <li>
    <span class="label">Views</span>
    <span class="quantity">{views}</span>
  </li>
  <li>
    <span class="label">Likes</span>
    <span class="quantity">{likes}</span>
  </li>
</ul>
</div> */
