import { use } from "react";
import Users from "./Users";

export default function User({ userLoad }) {
  const users = use(userLoad);

  return (
    <div>
      <p>Users: {users.length} </p>

      {users.map((user) => (
        <Users key={user.id} user={user}></Users>
      ))}
    </div>
  );
}
