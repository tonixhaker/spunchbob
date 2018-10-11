import React, { Component } from 'react';
import {SocialIcon} from 'react-social-icons';
import {Layout} from 'antd';

const { Footer } = Layout;

class AppFooter extends Component {

    render() {
        return(
            <Footer className={'footer'}>
                <div>
                    <SocialIcon url="http://instagram.com" network="instagram" />
                    <SocialIcon url="http://instagram.com" network="facebook" />
                    <SocialIcon url="http://instagram.com" network="vk" />
                    <SocialIcon url="http://instagram.com" network="twitter" />
                </div>
            </Footer>
        );
    }
}

export default AppFooter;
