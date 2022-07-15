import React from "react";

const MyContext = React.createContext("Hello React");

// const App = props => {
//   return <Navbar/>
// }

// const Navbar = props => {
//   return <Brand/>
// }

// const Brand = props => {
//   const value = React.useContext(MyContext)
//   return <h1>{value}</h1>
// }

class App extends React.Component {
  render() {
    return <Navbar/>
  }
}

class Navbar extends React.Component {
  render() {
    return <Brand/>
  }
}

class Brand extends React.Component {
  static contextType = MyContext;
  
  render() {
    return <h1>{this.context}</h1>
  }
}

export default App;