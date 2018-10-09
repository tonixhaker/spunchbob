import React  from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../components/layout/DefaultLayout';


class Private extends React.Component {
  static propTypes = {
      component: PropTypes.func.isRequired,
      fetchAuthUser: PropTypes.func.isRequired,
      location: PropTypes.object,
      isAuthenticated: PropTypes.bool,
      authUser: PropTypes.object,
      path:PropTypes.string
  };

  UNSAFE_componentWillMount() {
      if(this.props.isAuthenticated && !this.props.authUser.id) {
          this.props.fetchAuthUser();
      }
  }

  render() {
      const Component = this.props.component;
      return (
          <DefaultLayout>
              <Component {...this.props} />
          </DefaultLayout>
      );
  }
}

export default Private;