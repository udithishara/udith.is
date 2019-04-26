import React, { Component } from 'react';
import ContentLoader from 'react-content-loader';

class  Loading extends Component {

  renderTombstoneFilter() {
    if (this.props.tombstoneType === "list") {
      return [
        <ContentLoader key="listTomb-one" height={140}>
          <rect y="5" rx="1" ry="1" style={{ width: '50%', height: '13' }} preserveAspectRatio="none" />
          <rect y="25" rx="1" ry="1" style={{ width: '21%', height: '7' }} preserveAspectRatio="none" />
          <rect y="49" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="65" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="81" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="96" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect  y="119" rx="1" ry="1" style={{ width: '100%', height: '0.6' }} preserveAspectRatio="none" />
        </ContentLoader>,
        <ContentLoader key="listTomb-two" height={120}>
          <rect y="5" rx="1" ry="1" style={{ width: '50%', height: '13' }} preserveAspectRatio="none" />
          <rect y="25" rx="1" ry="1" style={{ width: '21%', height: '7' }} preserveAspectRatio="none" />
          <rect y="49" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="65" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="81" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="96" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect  y="119" rx="1" ry="1" style={{ width: '100%', height: '0.6' }} preserveAspectRatio="none" />
        </ContentLoader>
      ]
    } if (this.props.tombstoneType === "single") {
      return (
        <ContentLoader key="singleTomb" height={220}>
          <rect y="5" rx="1" ry="1" style={{ width: '40%', height: '13' }} preserveAspectRatio="none" />
          <rect y="25" rx="1" ry="1" style={{ width: '21%', height: '7' }} preserveAspectRatio="none" />
          <rect y="49" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="65" rx="1" ry="1" style={{ width: '30%', height: '10' }} preserveAspectRatio="none" />
          <rect x={'32%'} y="65" rx="1" ry="1" style={{ width: '68%', height: '10' }} preserveAspectRatio="none" />
          <rect y="81" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="96" rx="1" ry="1" style={{ width: '80%', height: '10' }} preserveAspectRatio="none" />
          <rect x={'82%'} y="96" rx="1" ry="1" style={{ width: '18%', height: '10' }} preserveAspectRatio="none" />
          <rect y="120" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="135" rx="1" ry="1" style={{ width: '70%', height: '10' }} preserveAspectRatio="none" />
          <rect y="160" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="175" rx="1" ry="1" style={{ width: '50%', height: '10' }} preserveAspectRatio="none" />
          <rect x={'52%'} y="175" rx="1" ry="1" style={{ width: '48%', height: '10' }} preserveAspectRatio="none" />
          <rect y="190" rx="1" ry="1" style={{ width: '100%', height: '10' }} preserveAspectRatio="none" />
          <rect y="205" rx="1" ry="1" style={{ width: '90%', height: '10' }} preserveAspectRatio="none" />
        </ContentLoader>
      )
    } else {
      return null
    }
  }

  render() {
    return this.renderTombstoneFilter();
  }

}

export default Loading;
