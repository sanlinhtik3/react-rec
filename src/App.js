import React from "react";

class Item extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}, ${this.props.price}
      </li>
    )
  }
}

class App extends React.Component {

  state = {
    items: [
      {id: 1, name: 'Apple', price: 2.1},
      {id: 2, name: 'Orange', price: 1.1},
    ]
  }

  add = () => {
    let id = this.state.items.length + 1;

    this.setState({
      items: [
        ...this.state.items,
        {id, name: `Fruit ${id}`, price: 0.1 * id}
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>Hello React Hi</h1>
        <button onClick={this.add}>Add</button>
        <ul>
          {this.state.items.map( i => {
            return (
              <Item
                key={i.id}
                name={i.name}
                price={i.price} 
              />
            )
          })}
          
        </ul>
      </div>
    )
  }
}

export default App;