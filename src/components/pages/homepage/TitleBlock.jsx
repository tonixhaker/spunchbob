import React, {Component} from 'react';
import {Parallax} from 'react-parallax';

class TitleBlock extends Component {

    render() {
        return(
            <div className={'title-block'}>
                <Parallax
                    blur={5}
                    bgImage={require('../../../img/title-background2.jpg')}
                    bgImageAlt="kivi"
                    strength={200}
                >
                    <div className={'paralax-content'}>
                        <div className={'title'} >
                            <p>Рестарт</p>
                        </div>
                        <div className={'call'}>
                            <p>Живешь, балдеешь, жрешь и худеешь</p>
                        </div>
                    </div>

                </Parallax>
            </div>
        );
    }
}

export default TitleBlock;
