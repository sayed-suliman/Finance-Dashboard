import DashboardBox from '@/components/DashboardBox'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Row1 = (props: Props) => {
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1