import React, { createRef } from "react";
import Users from "./Users";

const App = (props) => {
  // let [user, setUser] = React.useState('Eain Kyi')
  // let [age, setAge] = React.useState(22)

  let [users, setUsers] = React.useState([
    {id: 1, user: "Eain Kyi", age: 22},
    {id: 2, user: "Aung Gyi", age: 21},
  ])

  let userRef = createRef();
  let ageRef = createRef();

  let plus = () => {
    let id = users.length + 1;
    let user = userRef.current.value;
    let age = userRef.current.value;

    setUsers([
      ...users,
      {id, user, age},
    ])
  }

  return (
    <div>
      <input type="text" ref={userRef} /> <br/>
      <input type="text" ref={ageRef} /> <br/>
      <button onClick={plus}>Plus +</button>
      <ul>
          {users.map(u => <Users key={u.id} user={u.user} age={u.age} />)}
      </ul>
    </div>
  )
}

export default App;