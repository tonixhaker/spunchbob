import React, {Component, Fragment} from 'react';
import GuestPersonalMenuForm from '../../forms/GuestPersonalMenuForm';
import {Parallax} from 'react-parallax';
class PersonalMenuOrder extends Component {

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
                                <GuestPersonalMenuForm />
                            </div>
                        </div>
                    </Parallax>
                </div>
            </Fragment>
        );
    }
}

export default PersonalMenuOrder;
