import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CCardFooter,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel
} from '@coreui/react'
import {exec_commands} from '../backend.js';

const RouterTable = () => {
  let rtb_data = exec_commands("RTB", ["clear ip route *", "show ip route"]);
  let rtc_data = exec_commands("RTC", ["clear ip route *", "show ip route"]);
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
        <CCardHeader>
          查看路由表
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol xs="6">
            <CCard>
              <CCardHeader>
                路由表B
              </CCardHeader>
              <CCardBody>
                {rtb_data}
              </CCardBody>
            </CCard>
            </CCol>
            <CCol xs="6">
            <CCard>
              <CCardHeader>
                路由表C
              </CCardHeader>
              <CCardBody>
                {rtc_data}
              </CCardBody>
            </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      </CCol>
    </CRow>
  )
}

export default RouterTable
