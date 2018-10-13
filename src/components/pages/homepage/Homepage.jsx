import React, {Component, Fragment} from 'react';
import InviteBlock from './InviteBlock';
import Author from './Author';
import TitleBlock from './TitleBlock';

class Homepage extends Component {

    render() {
        return(
            <Fragment>
                <TitleBlock />
                <InviteBlock />
                <Author />
            </Fragment>
        );
    }
}

export default Homepage;
