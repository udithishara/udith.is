import React, { Component, Fragment } from 'react';

class Error extends Component {

  render() {
    return(
      <Fragment>
        <h3>No match for <code>{this.props.message}</code></h3>
      </Fragment>
    )
  }

}

export default Error;
