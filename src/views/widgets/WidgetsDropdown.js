import React, {useEffect, useState} from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = (props) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(props.data)
    }, [props.data])

  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header=""
          text="Impressions"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={data.impressions}
              pointHoverBackgroundColor="primary"
              label="Impressions"
              labels="months"
            />
          }
        >
          {/*<CDropdown>*/}
          {/*  <CDropdownToggle color="transparent">*/}
          {/*    <CIcon name="cil-settings"/>*/}
          {/*  </CDropdownToggle>*/}
          {/*  <CDropdownMenu className="pt-0" placement="bottom-end">*/}
          {/*    <CDropdownItem>Action</CDropdownItem>*/}
          {/*    <CDropdownItem>Another action</CDropdownItem>*/}
          {/*    <CDropdownItem>Something else here...</CDropdownItem>*/}
          {/*    <CDropdownItem disabled>Disabled action</CDropdownItem>*/}
          {/*  </CDropdownMenu>*/}
          {/*</CDropdown>*/}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header=""
          text="Submissions"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={data.submissions}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label="Submissions"
              labels="months"
            />
          }
        >
          {/*<CDropdown>*/}
          {/*  <CDropdownToggle caret={false} color="transparent">*/}
          {/*    <CIcon name="cil-location-pin"/>*/}
          {/*  </CDropdownToggle>*/}
          {/*  <CDropdownMenu className="pt-0" placement="bottom-end">*/}
          {/*    <CDropdownItem>Action</CDropdownItem>*/}
          {/*    <CDropdownItem>Another action</CDropdownItem>*/}
          {/*    <CDropdownItem>Something else here...</CDropdownItem>*/}
          {/*    <CDropdownItem disabled>Disabled action</CDropdownItem>*/}
          {/*  </CDropdownMenu>*/}
          {/*</CDropdown>*/}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header=""
          text="Leads"
          footerSlot={
            <ChartLineSimple
                pointed
              className="mt-3"
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={data.leads}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label="Leads"
              labels="months"
            />
          }
        >
          {/*<CDropdown>*/}
          {/*  <CDropdownToggle color="transparent">*/}
          {/*    <CIcon name="cil-settings"/>*/}
          {/*  </CDropdownToggle>*/}
          {/*  <CDropdownMenu className="pt-0" placement="bottom-end">*/}
          {/*    <CDropdownItem>Action</CDropdownItem>*/}
          {/*    <CDropdownItem>Another action</CDropdownItem>*/}
          {/*    <CDropdownItem>Something else here...</CDropdownItem>*/}
          {/*    <CDropdownItem disabled>Disabled action</CDropdownItem>*/}
          {/*  </CDropdownMenu>*/}
          {/*</CDropdown>*/}
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header=""
          text="Revenue"
          footerSlot={
              <ChartLineSimple
                  pointed
                  className="mt-3"
                  style={{height: '70px'}}
                  backgroundColor="rgba(255,255,255,.2)"
                  dataPoints={data.revenue}
                  options={{ elements: { line: { borderWidth: 2.5 }}}}
                  pointHoverBackgroundColor="warning"
                  label="Revenue"
                  labels="months"
              />
          }
        >
          {/*<CDropdown>*/}
          {/*  <CDropdownToggle caret className="text-white" color="transparent">*/}
          {/*    <CIcon name="cil-settings"/>*/}
          {/*  </CDropdownToggle>*/}
          {/*  <CDropdownMenu className="pt-0" placement="bottom-end">*/}
          {/*    <CDropdownItem>Action</CDropdownItem>*/}
          {/*    <CDropdownItem>Another action</CDropdownItem>*/}
          {/*    <CDropdownItem>Something else here...</CDropdownItem>*/}
          {/*    <CDropdownItem disabled>Disabled action</CDropdownItem>*/}
          {/*  </CDropdownMenu>*/}
          {/*</CDropdown>*/}
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
