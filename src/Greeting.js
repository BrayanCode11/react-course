export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title},dice {name}
    </h1>
  );
}

export function UserCard({name, amount, married, address}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{amount}</h1>
      <h1>{married ? "married" : "single"}</h1>
      <ul>
        <li>City: {address.city} </li>
        <li>Street: {address.street} </li>
      </ul>
    </div>
  );
}
