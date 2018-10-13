import React, {Component, Fragment} from 'react';
import InviteBlock from './InviteBlock';
import Author from './Author';
import TitleBlock from './TitleBlock';
import LatestPosts from './LatestPosts';
import Testimonials from './Testimonials';

class Homepage extends Component {

    render() {
        return(
            <Fragment>
                <TitleBlock />
                <LatestPosts />
                <InviteBlock />
                <Author />
                <Testimonials />
            </Fragment>
        );
    }
}

export default Homepage;
