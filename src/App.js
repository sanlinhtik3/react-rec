import React from "react";

class App extends React.Component {
  render() {
    let height = 200;
    let width = 300;
    const styles = {
      bb: {
        backgroundColor: 'black',
        color: 'white',
      },
      border: {
        border: '2px solid #007bff'
      }
    }

    return (
      <div style={styles.bb}>
        <h1 style={styles.border}>Brand & Logo</h1>
      </div>
    )
  }
}

export default App;