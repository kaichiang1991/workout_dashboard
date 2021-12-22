import React from 'react'
import CustomRow from '../components/common/CustomRow'
import { Col } from 'antd'
import styled from 'styled-components'
import { pie, line } from '../components/data/chart'
import { Pie, Line } from '@ant-design/charts'

const StyledChartColContainer = styled(Col)``

const StyledChartContainer = styled.div`
  border: 1px solid gray;
`

const ChartCol = ({ children, ...otherProps }) => {
  return (
    <StyledChartColContainer lg={6} sm={12} {...otherProps}>
      <StyledChartContainer>{children}</StyledChartContainer>
    </StyledChartColContainer>
  )
}

const ChartPage = props => {
  // 圓餅圖
  const { data: pieData, config: pieConfig } = pie
  // 動態折線圖
  const { data: lineData, config: lineConfig } = line

  return (
    <CustomRow gutter={[16, 16]}>
      <ChartCol>
        <Pie {...pieConfig} data={pieData} />
      </ChartCol>
      <ChartCol>
        <Line {...lineConfig} data={lineData} />
      </ChartCol>
      <ChartCol>Chart3</ChartCol>
      <ChartCol>Chart4</ChartCol>
    </CustomRow>
  )
}

ChartPage.propTypes = {}

export default ChartPage
