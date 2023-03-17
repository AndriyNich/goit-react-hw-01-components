import { Application } from './App.styled';
import user from '../data/user.json';
import data from '../data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <Application>
      <Profile userdata={user} />
      <Statistics title="Upload stats" stats={data} />
    </Application>
  );
};
