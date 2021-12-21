import React from 'react'
import PropTypes from 'prop-types'
import CustomRow from '../components/common/CustomRow'
import { Col } from 'antd'
import styled from 'styled-components'

const StyledBorderdCol = styled(Col)`
  border: 1px solid black;
`

const Dashboard = props => {
  return (
    <CustomRow gutter={[16, { md: 4, sm: 2 }]}>
      <StyledBorderdCol md={12} sm={6}>
        111
      </StyledBorderdCol>
      <StyledBorderdCol md={12} sm={6}>
        222
      </StyledBorderdCol>
      <StyledBorderdCol md={12} sm={6}>
        333
      </StyledBorderdCol>
      <StyledBorderdCol md={12} sm={6}>
        444
      </StyledBorderdCol>
    </CustomRow>
  )
}

Dashboard.propTypes = {}

export default Dashboard
