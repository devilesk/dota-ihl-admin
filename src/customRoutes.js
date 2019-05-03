import React from 'react';
import { Route } from 'react-router';
import LogoutRouteLayout from './logoutRouteLayout';

export default [
    <Route exact path="/logout" component={LogoutRouteLayout} />,
]