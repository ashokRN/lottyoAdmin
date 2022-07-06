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

/** Coin Route Imports */
const AddCoin = React.lazy(() => import('../pages/Coin/AddCoin'));
const ViewCoin = React.lazy(() => import('../pages/Coin/ViewCoin'));
const EditCoin = React.lazy(() => import('../pages/Coin/EditCoin'));
const ViewResult = React.lazy(() => import('../pages/Result/ViewResult'));
const ViewWinner = React.lazy(() => import('../pages/Result/ViewWinner'));
const AddResult = React.lazy(() => import('../pages/Result/AddResult'));

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
     {
          path: '/user',
          component: ViewEvent,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/coin',
          component: ViewCoin,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/coin/add',
          component: AddCoin,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/coin/:id',
          component: EditCoin,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/payment',
          component: ViewEvent,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/result',
          component: ViewResult,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/result/view/:id',
          component: ViewWinner,
          layout: LandingLayout,
          exact: true,
     },
     {
          path: '/result/add',
          component: AddResult,
          layout: LandingLayout,
          exact: true,
     },
];

export default Routes;
