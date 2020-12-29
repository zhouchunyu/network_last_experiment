import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import axios from 'axios';

class RouterTable extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      rtb_code: "",
      rtc_code: ""
    }
  }


  componentDidMount = () => {
    axios.post('http://localhost:5000/exec_commands', {
      host: "RTB",
      commands: ["clear ip route *", "show ip route"]
    })
    .then((response) => {
      // handle success
      console.log(response.data.code);
      this.setState({
        rtb_code: response.data.code
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
    //https://5feb1c81573752001730a4b9.mockapi.io/
    //http://localhost:5000/exec_commands
    axios.post('http://localhost:5000/exec_commands', {
      host: "RTC",
      commands: ["clear ip route *", "show ip route"]
    })
    .then((response) => {
      // handle success
      console.log(response.data.code);
      this.setState({
        rtc_code: response.data.code
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
                  路由表B
                </CCardHeader>
                <CCardBody>
                  {this.state.rtb_code}
                </CCardBody>
              </CCard>
              </CCol>
              <CCol xs="6">
              <CCard>
                <CCardHeader>
                  路由表C
                </CCardHeader>
                <CCardBody>
                  {this.state.rtc_code}
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
