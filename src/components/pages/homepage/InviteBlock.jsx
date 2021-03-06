import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class InviteBlock extends Component {

    render() {
        return(
            <div className={'invite-block'}>
                <div className={'container'}>
                    <div className={'image-left'} />
                    <div className={'block-right'}>
                        <h1 className={'title'}>Персональное меню</h1>
                        <p className={'info'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a luctus tellus. Suspendisse potenti. Integer auctor fermentum justo, sed mattis nulla ullamcorper eget. Morbi ornare sit amet turpis in faucibus. Mauris iaculis elit id pulvinar sodales. Sed at nisi eu lacus iaculis bibendum. Morbi turpis lacus, scelerisque a tellus nec, efficitur sodales lectus. Etiam posuere non lacus non cursus. Mauris porttitor, sem ut dictum hendrerit, mi justo egestas turpis, et porttitor elit lacus in ante. Duis egestas leo tempor augue mollis, eget placerat metus imperdiet.
                        </p>
                        <div className={'flex flex-center'}>
                            <Link to={'/personal-menu'} className={'btn order-btn'}>Хочу!</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InviteBlock;
