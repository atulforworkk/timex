import TaskCard from '@/components/taskCard/TaskCard'
import { Divider } from '@mantine/core'
import React from 'react'

type Props = {}

const Monday = (props: Props) => {
  return (
    <div className="w-400 px-4 py-2 w-2/12 border h-screen rounded-lg text-center ">
      <h1>Monday</h1>
      <Divider my="md" />
      <TaskCard taskTime='9 A.M.-10 A.M.' TaskName='sleeping'/>

    </div>
  )
}

export default Monday