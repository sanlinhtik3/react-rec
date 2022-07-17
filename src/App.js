import React, { createRef } from "react";
import { connect } from "react-redux";

const User = ({ name, age }) => (
  <li>{name}, {age}</li>
)

const App = props => {
  let nameRef = createRef();
  let ageRef = createRef();

  const plus = () => {
    props.plus(props.users.length + 1, nameRef.current.value, ageRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={nameRef} />
      <input type="text" ref={ageRef} />
      <button onClick={plus}>Plus +</button>
      <ul>
        {props.users.map( u => (<User key={u.id} name={u.name} age={u.age} />) )}
      </ul>
    </div>
  )
}

const stateToProps = state => {
  return {
    users: state
  }
}

const dispatchToProps = dispatch => {
  return {
    plus: (id, name, age) => {
      dispatch({type: "PLUS", user: {id, name, age}})
    }
  }
}

const ReduxApp = connect(stateToProps, dispatchToProps)(App);

export default ReduxApp;