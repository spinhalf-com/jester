import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux'
import {
    CHeader,
    CToggler,
    // CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
    CSubheader,
    CBreadcrumbRouter,
    CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// import {defaults, addDefaultData} from "../store/actions/defaults";
import {metadata} from "../store/actions/metadata";

// routes config
import routes from '../routes'

import {
    TheHeaderDropdown,
    // TheHeaderDropdownMssg,
    // TheHeaderDropdownNotif,
    // TheHeaderDropdownTasks
} from './index'
import { Functions } from "../functions/functions";
import AppContext from "../store/AppContext";

const TheHeader = (props) => {
    const context = React.useContext(AppContext);
    const {state, setState} = context;
    const dispatch = useDispatch()
    // const asideShow = useSelector(state => state.asideShow)
    const darkMode = useSelector(state => state.darkMode)
    // const sidebarShow = useSelector(state => state.sidebarShow)

    React.useEffect((data) => {
        props.getMetadata()
        checkMode()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // const toggleSidebar = () => {
    //     const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    //     dispatch({type: 'set', sidebarShow: val})
    // }

    // const toggleSidebarMobile = () => {
    //     const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    //     dispatch({type: 'set', sidebarShow: val})
    // }

    const refreshMetadata = () => {
        // localStorage.setItem('buttonstate', false);
        // Functions.setMetaData();
    }

    const logOut = () => {
        Functions.logout();
    }

    const checkMode = () => {
        if(localStorage.getItem('darkmode') !== 'true' && localStorage.getItem('darkmode') !== 'false') {
            setDarkMode()
        }
    }

    const setDarkMode = () => {
        if(localStorage.getItem('darkmode') === 'true') {
            localStorage.setItem('darkmode', 'false')
        } else {
            localStorage.setItem('darkmode', 'true')
        }
        window.location.reload();
    }

    return (
        <CHeader withSubheader>
            <CToggler
                inHeader
                className="ml-md-3 d-lg-none"
                onClick={() => setState({...state, menus: {...state.menus, leftSidebar: !state.menus.leftSidebar}})}
            />
            <CToggler
                inHeader
                className="ml-3 d-md-down-none"
                onClick={() => setState({...state, menus: {...state.menus, leftSidebar: !state.menus.leftSidebar}})}
            />

            {/*{ mobileLogo() }*/}

            <CHeaderNav className="d-md-down-none mr-auto">
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/dashboard">Dashboard</CHeaderNavLink>
                </CHeaderNavItem>
                {/*<CHeaderNavItem className="px-3">*/}
                {/*    <button onClick={(event) => {*/}
                {/*        addNew(event)*/}
                {/*    }}>Add New Guid*/}
                {/*    </button>*/}
                {/*</CHeaderNavItem>*/}
                <CHeaderNavItem className="px-3">
                    {/*<button disabled={buttonState} onClick={(event) => {*/}
                    {/*    refreshMetadata(event)*/}
                    {/*}}>Refresh Metadata*/}
                    {/*</button>*/}
                </CHeaderNavItem>
            </CHeaderNav>

            <CHeaderNav className="px-3">
                <CToggler
                    inHeader
                    className="ml-3 d-md-down-none"
                    onClick={() => dispatch({type: 'set', darkMode: !darkMode})}
                    title="Toggle Light/Dark Mode"
                >
                    <CIcon name="cil-moon" className="c-d-dark-none" alt="CoreUI Icons Moon" onClick={() => setDarkMode()}/>
                    <CIcon name="cil-sun" className="c-d-default-none" alt="CoreUI Icons Sun" onClick={() => setDarkMode()}/>
                </CToggler>
                {/*<TheHeaderDropdownNotif/>*/}
                {/*<TheHeaderDropdownTasks/>*/}
                {/*<TheHeaderDropdownMssg/>*/}
                <TheHeaderDropdown/>
                <CToggler
                    inHeader
                    className="d-md-down-none"
                    onClick={() => setState({...state, menus: {...state.menus, rightSidebar: true}})}
                >
                    <CIcon className="mr-2" size="lg" name="cil-applications-settings"/>
                </CToggler>
            </CHeaderNav>

            <CSubheader className="px-3 justify-content-between">
                <CBreadcrumbRouter className="border-0 c-subheader-nav m-0 px-0 px-md-3" routes={routes}/>
                <div className="d-md-down-none mfe-2 c-subheader-nav">
                    <CLink className="c-subheader-nav-link" href="#">
                        <CIcon name="cil-speech" alt="Settings"/>
                    </CLink>
                    <CLink
                        className="c-subheader-nav-link"
                        aria-current="page"
                        to="/dashboard"
                    >
                        <CIcon name="cil-graph" alt="Dashboard"/>&nbsp;Dashboard
                    </CLink>
                    <CLink className="c-subheader-nav-link" href="#" onClick={() => logOut()}>
                        <CIcon name="cil-settings" alt="Settings"/>&nbsp;Log Out
                    </CLink>
                </div>
            </CSubheader>
        </CHeader>
    )
}

function mapStateToProps(state) {
    return {
        metaData: state.metaData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMetadata: () => {
            dispatch(metadata.getMetaData());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(TheHeader)
