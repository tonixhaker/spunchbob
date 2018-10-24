import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {STATE_STATUSES} from '../common/constants/statuses';
import Loader from '../common/components/loader/Loader';
import {fetchAuthUser} from '../store/auth/actions';
import {setAuthHeader} from '../common/helpers/storage';
import {Redirect} from 'react-router-dom';

class Admin extends React.Component {
    static propTypes = {
        path:PropTypes.string,
        isAuthenticated:PropTypes.bool,
        isAdmin:PropTypes.number
    };

    UNSAFE_componentWillMount() {
        setAuthHeader();
        if(!this.props.user.id) {
            this.props.fetchAuthUser();
        }
    }

    render() {
        const Component = this.props.component;
        const { isAuthenticated,isAdmin,status } = this.props;
        console.log(isAuthenticated,isAdmin);
        if(status === STATE_STATUSES.PENDING){
            return <Loader height={'100vh'} size={100} />;
        }
        else if(status === STATE_STATUSES.READY && isAuthenticated && isAdmin){
            return (
                <DefaultLayout>
                    <Component {...this.props} />
                </DefaultLayout>
            );
        }
        else{
            return <Redirect to={'/login'} />;
        }
    }
}

const mapStateToProps = (store) => ({
    isAuthenticated:store.auth.isAuthenticated,
    isAdmin:store.auth.user.is_admin,
    user:store.auth.user,
    status:store.auth.status
});

const mapDispatchToProps = (dispach) => ({
    fetchAuthUser:() => dispach(fetchAuthUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);