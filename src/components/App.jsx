import { Application } from './App.styled';
import user from '../data/user.json';
import data from '../data/data.json';
import friendList from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Application>
      <Profile userdata={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
    </Application>
  );
};
