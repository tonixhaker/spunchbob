import Homepage from '../../components/pages/homepage/Homepage';
import About from '../../components/pages/about_us/About';
import Login from '../../components/pages/auth/Login';
import Registration from '../../components/pages/auth/Registration';
import PersonalMenuOrder from '../../components/pages/personal_menu/PersonalMenuOrder';
import SetPassword from '../../components/pages/auth/SetPassword';

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
    },
    {
        path: '/personal-menu',
        exact: true,
        name: 'personal-menu',
        footer:true,
        component: PersonalMenuOrder,
    },
    {
        path: '/set-password',
        exact: true,
        name: 'set-password',
        footer:true,
        component: SetPassword,
    }
];