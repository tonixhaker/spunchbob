import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {fetchAuthUser} from '../../../store/auth/actions';
import {Avatar} from 'evergreen-ui';
import PropTypes from 'prop-types';



class Profile extends Component {

    static propTypes = {
        user:PropTypes.object,
    };

    render() {
        const { user } = this.props;
        return(
            <Fragment>
                {user.avatar_url ?
                    <Avatar
                        src={user.avatar_url}
                        name={user.full_name}
                        size={40}
                    />
                    :
                    <Avatar isSolid name={user.full_name} size={40} />
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (store) => ({
    user:store.auth.user,
    status:store.auth.status
});

const mapDispatchToProps = (dispatch) => ({
    fetchAuthUser: () => dispatch(fetchAuthUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
