import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">By 计网摸鱼小分队.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
