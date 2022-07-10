import React from "react";
import MyMenu from "./MyMenu";

class Nav extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <h1 style={{ background: 'black', padding: 10, color: 'white' }}>Digital Hunter</h1>
        </Nav>
        <MyMenu>
          <h1>Hello React</h1>
          <p>Component Composition</p>
        </MyMenu>
      </div>
    )
  }
}

export default App;