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
import {exec_commands} from '../backend.js';

class AccessControl extends React.Component {

  constructor(props){
    super(props);
  }

  deny(){
    let router_name = document.getElementById("hf-up-router").value;
    let commands = [`access-list 1 deny ${document.getElementById("hf-up-network").value}`, "access-list 1 permit any", "router rip", "distribute-list 1 out"];
    exec_commands(router_name, commands);
  }

  undo_deny(){
    let router_name = document.getElementById("hf-down-router").value;
    let commands = ["config terminal", "no access-list 1 deny 192.168.254.0"];
    exec_commands(router_name, commands);
  }

  up_reset(){
    document.getElementById("hf-up-router").value = "";
    document.getElementById("hf-up-network").value = "";
  }

  down_reset(){
    document.getElementById("hf-down-router").value = "";
    document.getElementById("hf-down-network").value = "";
  }
  
  



  render(){
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
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            <CButton type="reset" size="sm" color="danger" onClick={this.up_reset.bind(this)}><CIcon name="cil-ban" /> Reset</CButton>
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
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"  onClick={this.down_reset.bind(this)}><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
        </CCard>

        </CCol>
      </CRow>
    )
  }
}

export default AccessControl
