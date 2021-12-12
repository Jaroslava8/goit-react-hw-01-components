import React from "react";
// import PropTypes from 'prop-types';
import Profile from "./components/Profile";
import user from "./user.json";
import stats from "./data.json";
import Statistics from "./components/Statistics";
import Template from "./components/Template";
import FriendList from "./components/FriendList";
import friends from "./friends.json";
import TransactionHistory from "./components/TransactionHistory";
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
