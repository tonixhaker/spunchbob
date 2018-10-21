import Logout from '../../components/pages/auth/Logout';
import Profile from '../../components/pages/profile/Profile';

export default [
    {
        path: '/logout',
        exact: true,
        name: 'logout',
        footer:false,
        component: Logout,
    },
    {
        path: '/profile',
        exact: true,
        name: 'profile',
        footer:true,
        component: Profile,
    },
];