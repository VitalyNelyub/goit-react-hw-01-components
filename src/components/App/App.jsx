import { Profile } from 'components/Profile/Profile';
import user from '../../../src/components/Data.json/user.json';
// import statistic from '../../../src/components/Data.json/data.json';
// import { Statistic } from 'components/Statistics/Statistics';

export const App = () => {
  return <Profile user={user} />;
  // return <Statistic />;
};
