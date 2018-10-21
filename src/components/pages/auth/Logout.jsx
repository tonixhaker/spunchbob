import React, {Component} from 'react';
import {logout} from '../../../store/auth/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {tokenRemove} from '../../../common/helpers/storage';
import Loader from '../../../common/components/loader/Loader';


class Logout extends Component {

  static propTypes = {
      logout:PropTypes.func,
  };

  componentDidMount(){
      this.props.logout().then(()=>{
          tokenRemove();
      });
  }

  render() {
      return <Loader height={'100vh'} size={100} />;
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
