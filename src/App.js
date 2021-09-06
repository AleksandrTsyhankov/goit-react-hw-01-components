import friends from './friend-list/friends.json';
import user from './social-profile/user.json';
import statisticalData from './statistics/statistical-data.json';
import transactions from './transaction-history/transactions.json';

import FriendList from './friend-list/FriendList';
import Profile from './social-profile/Profile';
import Statistics from './statistics/Statistics';
import TransactionHistory from './transaction-history/TransactionHistory';


function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />;
      <Statistics title="UPLOAD STATS" statistic={statisticalData} />;
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}

export default App;