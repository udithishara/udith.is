import React, { Component } from 'react';

class Error extends Component {

  render() {
    return(
      <div>
          {this.props.message}
        </div>
    )
  }

}


export default Error;