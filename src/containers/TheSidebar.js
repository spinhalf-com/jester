import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  // CNavItem,
  // CProgress,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import AppContext from "../store/AppContext";

const TheSidebar = () => {
  // const dispatch = useDispatch()
    const context = React.useContext(AppContext);
    const {state, setState} = context;
  // const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
        show={state.menus.leftSidebar}
        onShowChange={(state) => setState({...state, menus: {...state.menus, leftSidebar: state}})}
      unfoldable

    >
      <CSidebarBrand className="d-md-down-none" to="/">
          <div align="center" margin="auto" padding="20px">
          </div>
        <CIcon
          className="c-sidebar-brand-minimized"
          name=""
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />

        <CSidebarNavDivider />
        {/*<CSidebarNavTitle>System Utilization</CSidebarNavTitle>*/}
        {/*<CNavItem className="px-3 d-compact-none c-d-minimized-none">*/}
        {/*  <div className="text-uppercase mb-1"><small><b>CPU Usage</b></small></div>*/}
        {/*  <CProgress size="xs" value={25} color="info" />*/}
        {/*  <small className="text-muted">348 Processes. 1/4 Cores.</small>*/}
        {/*</CNavItem>*/}
        {/*<CNavItem className="px-3 d-compact-none c-d-minimized-none">*/}
        {/*  <div className="text-uppercase mb-1"><small><b>Memory Usage</b></small></div>*/}
        {/*  <CProgress size="xs" value={70} color="warning" />*/}
        {/*  <small className="text-muted">11444GB/16384MB</small>*/}
        {/*</CNavItem>*/}
        {/*<CNavItem className="px-3 mb-3 d-compact-none c-d-minimized-none">*/}
        {/*  <div className="text-uppercase mb-1"><small><b>SSD 1 Usage</b></small></div>*/}
        {/*  <CProgress size="xs" value={95} color="danger" />*/}
        {/*  <small className="text-muted">243GB/256GB</small>*/}
        {/*</CNavItem>*/}
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
