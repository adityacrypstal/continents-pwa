import React, {lazy, Suspense} from 'react';
import {Route, Switch,BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import PageNotFound from "./containers/PageNotFound";
import {createBrowserHistory} from "history";

const browserHistory = createBrowserHistory({queryKey: false});

const routes = [
    {
        path: '/',
        component: lazy(() => import('./containers/Continents')),
        exact: true,
    }, {
        path: '/countries/:code',
        component: lazy(() => import('./containers/Countries')),
        exact: true,
    }, {
        path: '/country/:code',
        component: lazy(() => import('./containers/Country')),
        exact: true,
    }];
const Router = () => {
    return (
        <BrowserRouter history={browserHistory}>
            <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route, idx) => (
                            <Route exact={route.exact} key={idx} path={`${route.path}`}>
                                <route.component/>
                            </Route>
                        ))}
                        <Route component={PageNotFound}/>
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default Router;
