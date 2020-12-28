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
import CIcon from '@coreui/icons-react'

const AccessControl = () => {
  return (
    <CRow>
      <CCol xs="12">
      <CCard>
        <CCardHeader>
          设置访问控制
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-up-router">Router Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="hf-up-router" name="hf-up-router" placeholder="Enter router name..." autoComplete="up-router" />
                <CFormText className="help-block">Please enter your router name</CFormText>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-up-network">Network</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="hf-up-network" name="hf-up-network" placeholder="Enter network..." autoComplete="up-network" />
                <CFormText className="help-block">Please enter your network</CFormText>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>

      <CCard>
        <CCardHeader>
          撤销访问控制
        </CCardHeader>
        <CCardBody>
          <CForm action="" method="post" className="form-horizontal">
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-down-router">Router Name</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="hf-down-router" name="hf-down-router" placeholder="Enter router name..." autoComplete="down-router" />
                <CFormText className="help-block">Please enter your router name</CFormText>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="hf-down-network">Network</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CInput id="hf-down-network" name="hf-down-network" placeholder="Enter network..." autoComplete="down-network" />
                <CFormText className="help-block">Please enter your network</CFormText>
              </CCol>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
        </CCardFooter>
      </CCard>

      </CCol>
    </CRow>
  )
}

export default AccessControl
