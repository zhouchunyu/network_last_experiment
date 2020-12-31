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
import {instance} from '../backend.js';

class AccessControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      deny_output: "",
      no_deny_output: ""
    }
  }

  deny(){
    let router_name = document.getElementById("hf-up-router").value;
    let commands = ["config terminal", `access-list 1 deny ${document.getElementById("hf-up-network").value}`, "access-list 1 permit any", "router rip", "distribute-list 1 out"];
    instance.post('exec_commands', {
      host: router_name,
      commands: commands
    })
    .then((response) => {
      // handle success
      this.setState({
        deny_output: response.data.code
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  }

  undo_deny(){
    let router_name = document.getElementById("hf-down-router").value;
    let commands = ["config terminal", `no access-list 1 deny ${document.getElementById("hf-down-network").value}`];
    instance.post('exec_commands', {
      host: router_name,
      commands: commands
    })
    .then((response) => {
      // handle success
      this.setState({
        no_deny_output: response.data.code
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
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
          <h5>设置访问控制</h5>
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
            <CButton type="submit" size="sm" color="primary" onClick={this.deny.bind(this)}><CIcon name="cil-scrubber"/> 提交</CButton>
            <CButton type="reset" size="sm" color="danger" onClick={this.up_reset.bind(this)}><CIcon name="cil-ban" /> 重置</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
        <CCardHeader>
          显示结果:
        </CCardHeader>
        <CCardBody>
          <ul>
            {this.state.deny_output? this.state.rtb_output.map((line, i) => <li key={i}>{line}</li>) : ""}
          </ul>
        </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>
          <h5>撤销访问控制</h5>
            
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
            <CButton type="submit" size="sm" color="primary" onClick={this.undo_deny.bind(this)}><CIcon name="cil-scrubber" /> 提交</CButton>
            <CButton type="reset" size="sm" color="danger"  onClick={this.down_reset.bind(this)}><CIcon name="cil-ban" /> 重置</CButton>
          </CCardFooter>
        </CCard>
        <CCard>
        <CCardHeader>
          显示结果:
        </CCardHeader>
        <CCardBody>
          <ul>
            {this.state.no_deny_output? this.state.rtb_output.map((line, i) => <li key={i}>{line}</li>) : ""}
          </ul>
        </CCardBody>
        </CCard>
        </CCol>
      </CRow>
    )
  }
}

export default AccessControl
