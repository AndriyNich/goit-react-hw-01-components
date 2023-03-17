import user from '../data/user.json';
import data from '../data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div>
      <Profile userdata={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
