import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import AppContext from "./store/AppContext";
import './scss/style.scss';

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Email App
const TheEmailApp = React.lazy(() => import('./views/apps/email/TheEmailApp'));

// Pages
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

const App = () => {

    const [state, setState] = React.useState({
        menus: {
            leftSidebar: true,
            rightSidebar: false
        }
    })

    return (
        <AppContext.Provider value={{state, setState}}>
            <HashRouter>
                <React.Suspense fallback={loading}>
                    <Switch>

                        <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>}/>
                        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>}/>
                        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>}/>
                        <Route path="/apps/email" name="Email App" render={props => <TheEmailApp {...props}/>}/>
                        <Route path="/" name="Home" render={props => <TheLayout {...props}/>}/>
                    </Switch>
                </React.Suspense>
            </HashRouter>
        </AppContext.Provider>
    );

}

export default App;
