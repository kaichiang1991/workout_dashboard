import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row } from 'antd'

const StyledCustomRowContainer = styled(Row)`
  padding: 12px 24px 16px;
`

const CustomRow = props => {
  return <StyledCustomRowContainer {...props} />
}

CustomRow.propTypes = {
  children: PropTypes.node,
}

export default CustomRow
