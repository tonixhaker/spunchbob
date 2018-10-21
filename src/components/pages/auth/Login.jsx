import React, {Component, Fragment} from 'react';
import LoginForm from '../../forms/LoginForm';
import {Parallax} from 'react-parallax';
import {login} from '../../../store/auth/actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Login extends Component {

  static propTypes = {
      login:PropTypes.func,
  };

  onSubmit = (data) => {
      this.props.login(data);
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
