import React from 'react'
import PropTypes from 'prop-types'
import CustomRow from '../components/common/CustomRow'
import { Col } from 'antd'
import styled from 'styled-components'

const StyledBorderdCol = styled(Col)`
  border: 1px solid black;
`

const Dashboard = props => {
  return <CustomRow gutter={[16, { md: 4, sm: 2 }]}></CustomRow>
}

Dashboard.propTypes = {}

export default Dashboard
