import React from 'react';
import navs from '../routes/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const MainLayout = () => {
     const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => {
          const _RenderRoute = (props) => (
               <Layout {...props}>
                    <Component {...props} />
               </Layout>
          );
          return <Route {...rest} render={_RenderRoute} />;
     };

     const _RoutesRender = (routes) => {
          let navs = [];

          for (let index = 0; index < routes.length; index++) {
               const element = routes[index];
               navs.push(<RouteWithLayout {...element} key={index} />);
          }

          return navs;
     };

     return (
          <React.Fragment>
               <BrowserRouter>
                    <Switch>{_RoutesRender(navs)}</Switch>
               </BrowserRouter>
          </React.Fragment>
     );
};

export default MainLayout;
