import React, {Component, Fragment} from 'react';
import InviteBlock from './InviteBlock';
import Author from './Author';

class Homepage extends Component {

    render() {
        return(
            <Fragment>
                <InviteBlock />
                <Author/>
            </Fragment>
        );
    }
}

export default Homepage;
