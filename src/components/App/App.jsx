import { Profile } from 'components/Profile/Profile';
import user from '../../../src/components/Data.json/user.json';
import statistic from '../../../src/components/Data.json/data.json';
import friends from '../../../src/components/Data.json/friends.json';
import transactions from '../../../src/components/Data.json/transactions.json';
import { StatisticList } from 'components/Statistics/StatisticList';
import { FriendsList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/Transactions/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticList title="Upload stats" statistic={statistic} />
      <FriendsList friends={friends} />
      <Transactions transactions={transactions} />
    </>
  );
};
