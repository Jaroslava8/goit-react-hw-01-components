import { FriendsProfile } from "./FriendsProfile";

export default function FriendList({ friends }) {
  return (
    <ul className="a">
      {friends.map((friend) => {
        return (
          <FriendsProfile
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
