import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppContent extends Component {

  static propTypes = {
      children: PropTypes.node.isRequired,
  };

  render() {
      return (
          <div className='content-wrapper test'>
              { this.props.children }
          </div>
      );
  }
}

export default AppContent;
