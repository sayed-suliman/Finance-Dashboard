import DashboardBox from '@/components/DashboardBox'
import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Row3 = (props: Props) => {
  return (
   <>
   <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
      </>
  )
}

export default Row3