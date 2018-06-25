import React, { Component } from 'react';
import ContentLoader from 'react-content-loader';

class  Loading extends Component {

  renderTombstoneFilter() {
    if (this.props.tombstoneType === "list") {
      return [
        <ContentLoader key="tombOne" height={120}>
          <rect x="40" y="5" rx="1" ry="1" width="300" height="13" />
          <rect x="40" y="22" rx="1" ry="1" width="100" height="5" />
          <rect x="40" y="41" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="54" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="66" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="78" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="101" rx="1" ry="1" width="300" height="0.6" />
        </ContentLoader>,
          <ContentLoader key="tombTwo">
            <rect x="40" y="5" rx="1" ry="1" width="300" height="13" />
            <rect x="40" y="22" rx="1" ry="1" width="100" height="5" />
            <rect x="40" y="41" rx="1" ry="1" width="300" height="9" />
            <rect x="40" y="54" rx="1" ry="1" width="300" height="9" />
            <rect x="40" y="66" rx="1" ry="1" width="300" height="9" />
            <rect x="40" y="78" rx="1" ry="1" width="300" height="9" />
            <rect x="40" y="101" rx="1" ry="1" width="300" height="0.6" />
          </ContentLoader>
      ]
    } if (this.props.tombstoneType === "single") {
      return (
        <ContentLoader height={200}>
          <rect x="40" y="5" rx="1" ry="1" width="300" height="13" />
          <rect x="40" y="22" rx="1" ry="1" width="100" height="5" />
          <rect x="40" y="41" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="54" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="66" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="78" rx="1" ry="1" width="280" height="9" />

          <rect x="40" y="98" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="110" rx="1" ry="1" width="180" height="9" />

          <rect x="40" y="130" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="142" rx="1" ry="1" width="150" height="9" />
          <rect x="195" y="142" rx="1" ry="1" width="145" height="9" />
          <rect x="40" y="154" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="166" rx="1" ry="1" width="300" height="9" />
          <rect x="40" y="178" rx="1" ry="1" width="230" height="9" />
        </ContentLoader>
      )
    }
  }

  render() {
    return this.renderTombstoneFilter();
  }

}


export default Loading;