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

class RipConfig extends React.Component {

  constructor(props) {
    super(props);
    this.state = {network_num: 3};
  }
  
  add(){
    this.setState({network_num: this.state.network_num + 1});
    console.log("change state");
  }

  network_tags(){
    let content = [];
    for (let i = 0; i < this.state.network_num; i++) {
      content.push(
        <CFormGroup row key={`hf-network-${i}`}>
          <CCol md="3">
            <CLabel htmlFor={`hf-network-${i}`}>network</CLabel>
          </CCol>
          <CCol xs="12" md="9">
            <CInput type="network" id={`hf-network-${i}`} name={`hf-network-${i}`} placeholder="Enter network..." autoComplete={`hf-network-${i}`}/>
            <CFormText className="help-block">Please enter your network</CFormText>
          </CCol>
        </CFormGroup>
      );
    }
    content.push(<CButton key={`hf-network-${this.state.network_num}`} size="sm" color="primary" onClick={this.add.bind(this)} ><CIcon name="cil-scrubber" /> add</CButton>)
    return content;
  };


  render() {
    return (<CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            RIP协议配置
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="hf-host">host</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput type="host" id="hf-host" name="hf-host" placeholder="Enter host..." autoComplete="host" />
                  <CFormText className="help-block">Please enter your host</CFormText>
                </CCol>
              </CFormGroup>
              {this.network_tags()}
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>)
  }
}

export default RipConfig
