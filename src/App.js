import React from "react";
import Users from "./Users";

const App = (props) => {
  return (
    <ul>
      <Users user="Aung Gyi" age="22" />
      <Users user="Maung Gyi" age="21" />
    </ul>
  )
}

export default App;