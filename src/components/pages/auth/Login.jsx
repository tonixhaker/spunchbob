import React, {Component, Fragment} from 'react';
import LoginForm from '../../forms/LoginForm';
import {Parallax} from 'react-parallax';

class Login extends Component {

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
                                <LoginForm />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </Fragment>
        );
    }
}

export default Login;
