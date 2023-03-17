import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ userdata }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userdata;
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>&#64;{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>
            {new Intl.NumberFormat('en-IN').format(followers)}
          </Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{new Intl.NumberFormat('en-IN').format(views)}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{new Intl.NumberFormat('en-IN').format(likes)}</Quantity>
        </StatsItem>
      </Stats>
    </Card>
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
