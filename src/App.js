import React from "react";
// import PropTypes from 'prop-types';
import Profile from "./components/Profile/Profile";
import user from "./user.json";
import stats from "./data.json";
import Statistics from "./components/Statistics/Statistics";
import Template from "./components/Statistics/Template";
import FriendList from "./components/Friends/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Template>
        <Statistics
          stats={stats.id}
          label={stats.label}
          percentage={stats.percentage}
        />
      </Template>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
