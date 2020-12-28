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
import CIcon from '@coreui/icons-react';
import {exec_commands} from '../backend.js';

function ping(){
  exec_commands("RTA", ["ping 192.168.3.1"]);
}

const Connectivity = () => {
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
        <CCardHeader>
          测试连通性
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-router">Router Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="hf-router" name="hf-router" placeholder="Enter router name..." autoComplete="router" />
                <CFormText className="help-block">Please enter your router name</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-ip-address">Ip Address</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="hf-ip-address" name="hf-ip-address" placeholder="Enter ip address..." autoComplete="ip-address" />
                <CFormText className="help-block">Please enter your ip-address</CFormText>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton size="sm" color="primary" onClick={ping}><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>
      <CCard>
      <CCardBody>
        显示结果:
      </CCardBody>
      </CCard>
      </CCol>
    </CRow>
  )
}

export default Connectivity
