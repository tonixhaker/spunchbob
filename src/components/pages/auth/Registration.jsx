import React, {Component, Fragment} from 'react';
import RegisterForm from '../../forms/RegisterForm';
import {Parallax} from 'react-parallax';
import {register} from '../../../store/auth/actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';



class Registration extends Component {

    static propTypes = {
        register:PropTypes.func,
    };

    onSubmit = (data) => {
        this.props.register(data);
    };

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
                                <RegisterForm
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
    register: (data) => dispatch(register(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Registration);
