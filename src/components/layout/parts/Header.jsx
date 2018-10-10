import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AppHeader extends Component {


    constructor(props) {
        super(props);

        this.guestNavigation = [
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
            <div className={'header'}>
                <div className={'menu-container'}>
                    <div className={'flex flex-space-around'}>
                        <Link to={'/'}>
                            <div className={'logo'} />
                        </Link>
                        <nav className={'nav-menu flex flex-center flex-column'}>
                            <ul className={'flex flex-space-around '}>
                                {navigation.map((nav, i)=>{
                                    return(<li key={i}><Link to={nav.link}>{nav.title}</Link></li>);
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}


export default AppHeader;
