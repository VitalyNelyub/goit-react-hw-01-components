import { Profile } from 'components/Profile/Profile';
import user from '../../../src/components/Data.json/user.json';
import statistic from '../../../src/components/Data.json/data.json';
import friends from '../../../src/components/Data.json/friends.json';
// import { Statistic } from 'components/Statistics/Statistics';
import { StatisticList } from 'components/Statistics/StatisticList';
import { FriendsList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile user={user} />;
      <StatisticList statistic={statistic} />;
      <FriendsList friends={friends} />
    </>
  );
};
