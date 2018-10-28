import React, {Component, Fragment} from 'react';
import GuestPersonalMenuForm from '../../forms/GuestPersonalMenuForm';
import {Parallax} from 'react-parallax';
import {connect} from 'react-redux';
import {notRegisteredOrder} from '../../../store/order/actions';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import {withRouter} from 'react-router-dom';


class PersonalMenuOrder extends Component {

    static propTypes = {
        notRegisteredOrder:PropTypes.func,
        isAuthenticated:PropTypes.bool,
        history:PropTypes.object
    };

    makeOrder = (data) => {
        if(this.props.isAuthenticated){
            console.log('Auth');
        }
        else{
            this.props.notRegisteredOrder(data).then(()=>{
                Alert.success('Заказ сформирован, Спасибо!', {
                    position: 'top',
                    effect: 'jelly',
                    offset: '0',
                    timeout: 5000
                });
                this.props.history.push('/');
            }).catch(()=>{
                Alert.error('Пользователь с таким email уже существует, пожалуйста залогинтесь!', {
                    position: 'top',
                    effect: 'jelly',
                    offset: '0',
                    timeout: 5000
                });
            });
        }
    }

    render() {
        return(
            <Fragment>
                <div className={'registration-block'}>
                    <Parallax
                        blur={5}
                        bgImage={require('../../../img/register-back.jpg')}
                        bgImageAlt="kivi"
                        strength={200}
                    >
                        <div className={'flex flex-center paralaxcontent'}>
                            <div className={'container'}>
                                <GuestPersonalMenuForm onSubmit={(values)=>this.makeOrder(values)} />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (store) => ({
    isAuthenticated:store.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch) => ({
    notRegisteredOrder: (data) => dispatch(notRegisteredOrder(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(PersonalMenuOrder));
