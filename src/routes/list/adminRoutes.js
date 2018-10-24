import AdminDashboard from '../../components/pages/admin/dashboard/Dashboard';

const prefix = '/admin';

export default [
    {
        path: `${prefix}`,
        exact: true,
        name: 'dashboard',
        footer:false,
        component: AdminDashboard,
    }
];