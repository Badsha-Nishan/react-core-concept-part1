import { use } from "react";
import Users from "./Users";

export default function User({ userLoad }) {
  const users = use(userLoad);
  console.log(users);

  return (
    <div>
      <p>Users: {users.length} </p>

      {users.map((user) => (
        <Users user={user}></Users>
      ))}
    </div>
  );
}
