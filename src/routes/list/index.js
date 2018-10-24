import authRoutes from './authRoutes';
import guestRoutes from './guestRoutes';
import adminRoutes from './adminRoutes';

export default [
    ...authRoutes.map(route => {
        route.auth = true;
        route.admin = false;
        return route;
    }),
    ...guestRoutes.map(route => {
        route.auth = false;
        route.admin = false;
        return route;
    }),
    ...adminRoutes.map(route => {
        route.admin = true;
        return route;
    })
];