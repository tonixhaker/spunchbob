import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchAuthUser} from '../store/auth/actions';
import DefaultLayout from '../components/layout/DefaultLayout';
import {STATE_STATUSES} from '../common/constants/statuses';
import {Redirect} from 'react-router-dom';
import Loader from '../common/components/loader/Loader';
import {setAuthHeader} from '../common/helpers/storage';



class Private extends React.Component {
  static propTypes = {
      status:PropTypes.number,
      user:PropTypes.object,
      fetchAuthUser:PropTypes.func,
      isAuthenticated:PropTypes.bool
  };

  UNSAFE_componentWillMount() {
      setAuthHeader();
      if(!this.props.user.id) {
          this.props.fetchAuthUser();
      }
  }

  render() {
      const { user, isAuthenticated, status} = this.props;
      const Component = this.props.component;

      if(isAuthenticated && status !== STATE_STATUSES.PENDING) {
          if(user.id && isAuthenticated) {
              return (
                  <DefaultLayout>
                      <Component {...this.props} />
                  </DefaultLayout>
              );
          } else {
              return <Loader height={'100vh'} size={100} />;
          }
      }
      else if(status === STATE_STATUSES.PENDING){
          return <Loader height={'100vh'} size={100} />;
      }
      else {
          return <Redirect to={'/login'} />;
      }
  }
}

const mapStateToProps = (store) => ({
    isAuthenticated:store.auth.isAuthenticated,
    status:store.auth.status,
    user:store.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    fetchAuthUser: () => dispatch(fetchAuthUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Private);