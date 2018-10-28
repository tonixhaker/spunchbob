import React, {Component, Fragment} from 'react';
import {Parallax} from 'react-parallax';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SetPasswordForm from '../../forms/SetPasswordForm';
import {set_password} from '../../../store/auth/actions';
import queryString from 'query-string';
import Alert from 'react-s-alert';
import {withRouter} from 'react-router-dom';


class SetPassword extends Component {

  static propTypes = {
      set_password:PropTypes.func,
      location:PropTypes.object,
      history:PropTypes.object
  };

  onSubmit = (data) => {
      const values = queryString.parse(this.props.location.search);
      data['token']=values.token;
      this.props.set_password(data).then(()=>{
          Alert.success('Пароль был задан, Спасибо!', {
              position: 'top',
              effect: 'jelly',
              offset: '0',
              timeout: 5000
          });
      }).catch(()=>{
          Alert.error('Ссылка восстановления устарела', {
              position: 'top',
              effect: 'jelly',
              offset: '0',
              timeout: 5000
          });
          this.props.history.push('/');
      });
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
                              <SetPasswordForm
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
    set_password: (data) => dispatch(set_password(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SetPassword));
