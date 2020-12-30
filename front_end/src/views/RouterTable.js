import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react';

import {instance} from '../backend.js';

class RouterTable extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      rtb_output: "",
      rtc_output: ""
    }
  }


  componentDidMount = () => {
    instance.post('exec_commands', {
      host: "RTB",
      commands: ["clear ip route *", "show ip route"]
    })
    .then((response) => {
      // handle success
      this.setState({
        rtb_output: response.data.code
      });
      console.log(this.state.rtb_output);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
    instance.post('exec_commands', {
      host: "RTC",
      commands: ["clear ip route *", "show ip route"]
    })
    .then((response) => {
      // handle success
      console.log(response.data.code);
      this.setState({
        rtc_output: response.data.code
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  }

  render() {
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
                  Router B
                </CCardHeader>
                <CCardBody>
                  <ul>
                    {this.state.rtb_output? this.state.rtb_output.map((line, i) => <li key={i}>{line}</li>) : ""}
                  </ul>
                </CCardBody>
              </CCard>
              </CCol>
              <CCol xs="6">
              <CCard>
                <CCardHeader>
                  Router C
                </CCardHeader>
                <CCardBody>
                  <ul>
                  {this.state.rtc_output? this.state.rtc_output.map((line, i)=> <li key={i}>{line}</li>) : ""}
                  </ul>
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
}

export default RouterTable
