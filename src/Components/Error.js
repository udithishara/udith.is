import React, { Component } from 'react';

class Error extends Component {

  render() {
    return(
      <div>
        <span role="img" aria-label="Warning">⚠️</span>
          {this.props.message}
        </div>
    )
  }

}


export default Error;