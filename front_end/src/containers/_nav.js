import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: '实验拓扑图',
    to: '/topology',
    icon: 'cil-graph'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '测试连通性',
    to: '/connectivity',
    icon: 'cil-drop'
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'rip协议配置',
    to: '/rip-config',
    icon: 'cil-settings'
  },
  {
    _tag: 'CSidebarNavItem',
    name: '访问控制',
    to: '/access-control',
    icon: 'cil-ban'
  }
]

export default _nav
