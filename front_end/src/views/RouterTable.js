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
  exec_commands("RTB", ["clear ip route *", "show ip route"]);
  exec_commands("RTC", ["clear ip route *", "show ip route"]);
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
        <CCardHeader>
          查看路由表
        </CCardHeader>
        <CCardBody>
          
        </CCardBody>
      </CCard>
      </CCol>
    </CRow>
  )
}

export default RouterTable
