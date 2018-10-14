import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import AppContent from './parts/Content';
import AppFooter from './parts/Footer';
import AppHeader from './parts/Header';

class DefaultLayout extends Component {

  static propTypes = {
      children: PropTypes.node.isRequired,
      footer:PropTypes.bool
  };

  constructor(props){
      super(props);
  }

  render() {
      return (
          <div className={'flex flex-center flex-column'}>
              <AppHeader />
              <AppContent>
                  { this.props.children }
              </AppContent>
              {this.props.footer !== false &&
                <AppFooter/>
              }
          </div>
      );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

