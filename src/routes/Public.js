import React from 'react';
import { Route } from 'react-router-dom';
import DefaultLayout from '../components/layout/DefaultLayout';

const CustomRoute = ({ component: Component,  ...rest }) => {
    return <Route {...rest} render={props => (
        <DefaultLayout {...rest}>
            <Component {...props} />
        </DefaultLayout>
    )} />;
};


export default CustomRoute;