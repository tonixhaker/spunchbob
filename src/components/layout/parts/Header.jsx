import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout} from 'antd';

const { Header } = Layout;

class AppHeader extends Component {


    constructor(props) {
        super(props);

        this.guestNavigation = [
            {
                title:'Главная',
                link:'/about'
            },
            {
                title:'О нас',
                link:'/about'
            },
            {
                title: 'Блог',
                link: '/blog'
            },
            {
                title: 'Войти',
                link: '/login'
            },
            {
                title: 'Зарегистрироваться',
                link: '/register'
            }
        ];
    }


    render() {
        const navigation = this.guestNavigation;

        return (
            <Header className={'header'}>
                <div className={'menu-container'}>
                    <div className={'flex flex-space-around'}>
                        <Link to={'/'}>
                            <div className={'logo'} />
                        </Link>
                        <nav className={'nav-menu flex flex-center flex-column'}>
                            <ul className={'flex flex-space-around '}>
                                {navigation.map((nav, i)=>{
                                    return(<li className={'flex flex-center flex-column'} key={i}><Link to={nav.link}>{nav.title}</Link></li>);
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </Header>
        );
    }
}


export default AppHeader;
