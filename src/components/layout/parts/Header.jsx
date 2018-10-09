import React, {Component} from 'react';
import {connect} from 'react-redux';
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
            <div id={'header'}>
                <div className="container main-menu">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to={'/'}><img src={require('../../../img/restart-ico.png')} /></Link>
                        </div>
                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
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

function mapStateToProps() {

}


export default connect(mapStateToProps)(AppHeader);
