import Profile from "../Profile/Profile";
import Statistics from "../Statistics";
import FriendList from "../FriendList";
import TransactionHistory from "../TransactionHistory";
import dataStatistics from "../../data/data.json";
import dataProfile from "../../data/user.json";
import dataFriendList from "../../data/friends.json";
import dataTransactionHistory from "../../data/transactions.json";

const Main = () => {
const { username, tag, location, avatar, stats } = dataProfile;
  return (
    <main>
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />;
      <Statistics stats={dataStatistics} title="Upload stats" />
      <FriendList friends={dataFriendList} />
      <TransactionHistory items={dataTransactionHistory} />
    </main>
  );
};

export default Main;
