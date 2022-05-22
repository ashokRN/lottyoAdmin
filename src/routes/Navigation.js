import React from 'react';

const LandingLayout = React.lazy(() => import('../layouts/LandingLayout'));
const AuthLayout = React.lazy(() => import('../layouts/AuthLayout'));

/** Auth Route Imports */
const Login = React.lazy(() => import('../pages/Auth/Login'));
const Signup = React.lazy(() => import('../pages/Auth/Signup'));

/** Events Route Imports */
const AddEvent = React.lazy(() => import('../pages/Events/AddEvent'));
const ViewEvent = React.lazy(() => import('../pages/Events/ViewEvent'));
const EditEvent = React.lazy(() => import('../pages/Events/EditEvent'));

const Routes = [
     {
          path: '/login',
          component: Login,
          layout: AuthLayout,
          exact: true,
     },
     {
          path: '/signup',
          component: Signup,
          layout: AuthLayout,
          exact: true,
     },
     {
          path: '/event',
          component: ViewEvent,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/event/add',
          component: AddEvent,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/event/:id',
          component: EditEvent,
          layout: LandingLayout,
          exact: true,
     },
];

export default Routes;
