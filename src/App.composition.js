import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

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
          <h1 style={{ background: 'black', padding: 20, color: 'white' }}>Digital Hunter</h1>
        </Nav>
        <Menu>
          <h1>Hello React</h1>
          <p>Component Composition</p>
        </Menu>
      </div>
    )
  }
}

export default App;