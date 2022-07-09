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

  // nameRef = React.createRef();
  // <input type="text" ref={this.nameRef} />
  // let name = this.nameRef.current.value;

  state = {
    items: [
      {id: 1, name: 'Apple', price: 2.1},
      {id: 2, name: 'Orange', price: 1.1},
    ]
  }

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () => {
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;

    this.setState({
      items: [
        ...this.state.items,
        {id, name, price}
      ]
    })
  }

  render() {
    return (
      <div>
        <h1>Hello React Hi</h1>
        <input type="text" ref={this.nameRef} />
        <input type="text" ref={this.priceRef} />
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