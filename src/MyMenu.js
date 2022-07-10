import React from "react";

class MyMenu extends React.Component {
    render() {
      return (
        <div>
          {this.props.children}
        </div>
      )
    }
}

export default MyMenu;