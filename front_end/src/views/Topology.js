import React from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow
} from '@coreui/react'

import {
  CBadge,
  CCardFooter,
  CCollapse,
  CFade,
  CSwitch
} from  '@coreui/react'

import { DocsLink } from 'src/reusable'
import routes from '../routes'

import CIcon from '@coreui/icons-react'

import {exec_commands} from '../backend.js'

function hello(){
  exec_commands()
}

const Topology = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard onClick={hello}>
          <CCardHeader>
            <h3>基于web的网络拓扑搭建及校验的自动化(ACL主题)</h3> 
          </CCardHeader>
          <CCardBody>
            <h5>实验拓扑图:</h5>
            <img src="images/topology.jpg"  class="img-fluid"></img>
            <br></br>
            <h5>网络拓扑描述:</h5>
            此网络拓扑中试验用局域网192.168.254.0/24仅对192.168.3.0/24网段的用户开放访问，其余网段无法访问该局域网。因此，需在路由器RTB上设置访问控制列表，以限制试验用局域网的访问权限。
            <span></span>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Topology
