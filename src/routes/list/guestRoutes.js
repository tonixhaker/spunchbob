import Homepage from '../../components/pages/homepage/Homepage';
import About from '../../components/pages/about_us/About';
import Login from '../../components/pages/auth/Login';
import Registration from '../../components/pages/auth/Registration';

export default [
    {
        path: '/',
        exact: true,
        name: 'home',
        footer:true,
        component: Homepage,
    },
    {
        path: '/about',
        exact: true,
        name: 'home',
        footer:true,
        component: About,
    },
    {
        path: '/login',
        exact: true,
        name: 'home',
        footer:false,
        component: Login,
    },
    {
        path: '/register',
        exact: true,
        name: 'home',
        footer:false,
        component: Registration,
    }
];