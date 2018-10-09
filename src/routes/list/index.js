import authRoutes from './authRoutes';
import guestRoutes from './guestRoutes';

export default [
    ...authRoutes.map(route => {
        route.auth = true;
        return route;
    }),
    ...guestRoutes.map(route => {
        route.auth = false;
        return route;
    })
];