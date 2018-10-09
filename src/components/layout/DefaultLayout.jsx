import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppContent from './parts/Content';
import AppFooter from './parts/Footer';
import AppHeader from './parts/Header';

class DefaultLayout extends Component {

  static propTypes = {
      children: PropTypes.node.isRequired,
  };

  constructor(props){
      super(props);
  }

  render() {
      return (
          <Fragment>
              <AppHeader />
              <AppContent>
                  { this.props.children }
              </AppContent>
              <AppFooter />
          </Fragment>
      );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

