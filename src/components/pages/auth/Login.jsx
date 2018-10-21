import React, {Component, Fragment} from 'react';
import LoginForm from '../../forms/LoginForm';
import {Parallax} from 'react-parallax';
import {google_auth, login, telegram_auth} from '../../../store/auth/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Login extends Component {

  static propTypes = {
      login:PropTypes.func,
      google_auth: PropTypes.func,
      telegram_auth: PropTypes.func,
  };

  onSubmit = (data) => {
      this.props.login(data);
  };

    sendGoogleToken = values => {
        this.props.google_auth({ token: values.accessToken });
    };

    handleTelegramResponse = response => {
        this.props.telegram_auth(response);
    };


    render() {
        return(
            <Fragment>
                <div className={'login-block'}>
                    <Parallax
                        blur={5}
                        bgImage={require('../../../img/login-back.jpg')}
                        bgImageAlt="kivi"
                        strength={200}
                    >
                        <div className={'flex flex-center paralaxcontent'}>
                            <div className={'container'}>
                                <LoginForm
                                    onSubmit={this.onSubmit}
                                    handleTelegramResponse={this.handleTelegramResponse}
                                    sendGoogleToken={this.sendGoogleToken}
                                />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(login(data)),
    google_auth: (token) => dispatch(google_auth(token)),
    telegram_auth: (response) => dispatch(telegram_auth(response))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
