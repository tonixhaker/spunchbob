import React from 'react';
import {Redirect} from 'react-router-dom';
import DefaultLayout from '../components/layout/DefaultLayout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Public extends React.Component {
    static propTypes = {
        path:PropTypes.string,
        isAuthenticated:PropTypes.bool
    };

    render() {
        const Component = this.props.component;
        const { isAuthenticated } = this.props;

        if(isAuthenticated && (this.props.path ==='/login' || this.props.path ==='/register')){
            return <Redirect to={'/'} />;
        }
        else{
            return (
                <DefaultLayout>
                    <Component {...this.props} />
                </DefaultLayout>
            );
        }
    }
}

const mapStateToProps = (store) => ({
    isAuthenticated:store.auth.isAuthenticated,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Public);