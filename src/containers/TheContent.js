import React, {Suspense} from 'react'
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom'
import {CContainer, CFade} from '@coreui/react'
import _ from 'lodash'
import moment from "moment";
// routes config
import routes from '../routes'
import config from "../config/config";
import axios from "axios";
import headers from "../config/headers";
import navBar from "./_nav";

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

const TheContent = () => {

    const [authenticated, setAuthenticated] = React.useState(false)
    const [isAdmin, setIsAdmin] = React.useState(false)

    React.useEffect(() => {

    }, [])

    const authCheck = () => {
         //console.log(parseInt(sessionStorage.getItem('token_expiry')) > moment().unix())

        if(!_.isEmpty(localStorage.getItem('token')) && parseInt(localStorage.getItem('token_expiry')) > moment().unix()) {
            let url = config.API_URL + 'admin/check';
            axios.get(url, headers()).then(
                (apiResponse) => {
                    setAuthenticated(true)
                },
                (error) => {
                    console.log(error);
                    setAuthenticated(false)
                    window.location.href = '/#/login'
                }
            );
        } else {
            window.location.href = '/#/login'
        }
    }

    const adminCheck = () => {
        if(config.ADMINS.includes(localStorage.getItem('token_email'))) {
            setIsAdmin(true)
        }
    }

    const checkRoute = (route, idx) => {
        if(route.auth === false) {
            return route.component && (
                <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <CFade>
                            <route.component {...props} />
                        </CFade>
                    )}/>
            )
        } else  {
            if(authenticated && isAdmin) {
                return route.component && (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                            <CFade>
                                <route.component {...props} />
                            </CFade>
                        )}/>
                )
            } else {
                if(route.admin === false) {
                    return route.component && (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <CFade>
                                    <route.component {...props} />
                                </CFade>
                            )}/>
                    )
                }
            }
        }
    }

    return (
        <main className="c-main">
            <CContainer fluid>
                <Suspense fallback={loading}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return checkRoute(route, idx)
                        })}
                        {/*<Redirect from="/" to="/dashboard"/>*/}
                    </Switch>
                </Suspense>
            </CContainer>
        </main>
    )
}

export default React.memo(TheContent)
