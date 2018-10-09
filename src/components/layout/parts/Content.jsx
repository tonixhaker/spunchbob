import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppContent extends Component {

  static propTypes = {
      children: PropTypes.node.isRequired,
  };

  render() {
      return (
          <div className='content-wrapper'>
              { this.props.children }
          </div>
      );
  }
}

export default AppContent;
