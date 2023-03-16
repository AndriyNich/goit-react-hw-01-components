import user from '../data/user.json';
import { Profile } from './profile/profile';

export const App = () => {
  return (
    <div>
      <Profile userdata={user} />
    </div>
  );
};
