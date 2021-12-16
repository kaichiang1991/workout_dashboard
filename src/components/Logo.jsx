import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// 整個logo的部分 （上下置中）
const StyledLogoSection = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 4px 0;
  font-size: 28px;
  height: 64px;
`

// Logo 的容器
const StyledLogoContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: #fff;
    margin: 0;
    display: ${props => (props.show ? 'block' : 'none')};
  }
`
const Logo = ({ logo, collapse, icon }) => {
  return (
    <StyledLogoSection>
      <StyledLogoContainer show={!collapse}>
        {icon}
        <h1>{logo}</h1>
      </StyledLogoContainer>
    </StyledLogoSection>
  )
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  collapse: PropTypes.bool,
  icon: PropTypes.node.isRequired,
}

export default Logo
