import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout} from 'antd';
import {Button, Icon, SideSheet} from 'evergreen-ui';
import RoutesList from './RoutesList';

const { Header } = Layout;

class AppHeader extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isShown:false
        };
    }

    mobileMenuSwitch = () => {
        console.log(this.state.isShown);
        this.setState({isShown:!this.state.isShown});
    };


    render() {
        const { isShown } = this.state;
        return (
            <Header className={'header'}>
                <div className={'menu-container'}>
                    <div className={'flex flex-space-around headerfix'}>
                        <Link to={'/'}>
                            <div className={'logo'} />
                        </Link>
                        <RoutesList />
                        {
                            <div className={'flex flex-center flex-column'}>
                                <SideSheet
                                    position={'right'}
                                    isShown={isShown}
                                    onCloseComplete={() => this.setState({isShown:false})}
                                    containerProps={{
                                        marginTop:'64px',
                                        paddingBottom:'30px',
                                        paddingTop:'20px',
                                        height:'auto',
                                        width:'auto'
                                    }}
                                    hasCancel={false}
                                >
                                    <RoutesList mobile />
                                </SideSheet>
                                <Button  className={'transparent-button mobile-header-button'} onClick={this.mobileMenuSwitch}>
                                    {!isShown ?
                                        <Icon icon="menu" size={40} color={'#36a89d'}/>
                                        :
                                        <Icon icon="cross" size={40} color={'#36a89d'}/>
                                    }
                                </Button>
                            </div>
                        }
                    </div>
                </div>
            </Header>
        );
    }
}


export default AppHeader;
