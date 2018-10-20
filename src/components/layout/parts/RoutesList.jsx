import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';


class RoutesList extends Component {

    static propTypes = {
        mobile:PropTypes.bool
    }

    constructor(props) {
        super(props);

        this.guestNavigation = [
            {
                title:'Главная',
                link:'/'
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

        this.state = {
            isShown:false
        };
    }


    render() {
        const navigation = this.guestNavigation;
        const {mobile} = this.props;
        return (

            <nav className={'nav-menu flex flex-center flex-column'}>
                <ul className={'flex flex-space-around'+(mobile&&' mobile-header-nav')}>
                    {navigation.map((nav, i)=>{
                        return(<li className={'flex flex-center flex-column'} key={i}><Link to={nav.link}>{nav.title}</Link></li>);
                    })}
                </ul>
            </nav>

        );
    }
}


export default RoutesList;
