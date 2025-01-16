import { Grid } from '@mantine/core'
import images from 'images/images'
import React from 'react'

type Props = {}

const AgentCard = (props: Props) => {
  return (
        <Grid.Col span={2.4} className="flex items-center justify-center flex-col">
            <h1 className='text-lg'>
                Player 1
            </h1>
                <div className=' w-32 h-32 border m-2 rounded-lg '>
            <img src={images.questionMarkIconBlack} alt="" />
            </div>
        
        </Grid.Col>
  )
}

export default AgentCard